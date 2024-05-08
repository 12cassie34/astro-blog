---
slug: "learning-diary/socket-io-note"
layout: ../../layouts/Blog.astro
category: "learning-diary"
poster: "https://cdn.pixabay.com/photo/2015/11/13/19/07/alternative-energy-1042411_1280.jpg"
title: "Socket.Io Note"
subtitle: "This story is about why we need WebSocket and the basic features of Socket.IO."
relatedPosts: []
pubDate: 1715077161000
---
# Why Do We Need WebSocket?
To answer this question, we should first discuss the characteristics of the RESTful API.

In RESTful APIs, communication between clients and servers occurs via the HTTP protocol (a communication protocol on the World Wide Web).

There are several constraints in RESTful API:

- **One-way connection:** Only one of the two sides can send a request. The client-side and the server-side cannot send requests simultaneously.
- **Non-continuous**: When communication ends, the connection tunnel is closed.
- As it is RESTful, it is stateless. Headers, cookies, origin, etc., need to be specified every time.

These constraints prevent us from building effective real-time communication, and this is where WebSocket come in.

When an initial connection is established (referred to as a 'handshake' in WebSocket), **the client-side and the server-side can communicate continuously**.

This technology is useful when we want to build a real-time application, such as a chat app, co-editing online documents.

# Socket.IO
WebSocket is a low-level API; often, it needs a layer to work with. Socket.IO is one of the most popular libraries to do the job.

Socket.IO handles these tasks for us:

1. Broadcast to all or a part of the connected clients. [👉](#broadcast)
2. Receive a response to create a more RESTful style mechanism using acknowledgements. [👉](#acknowledgement)
3. If a connection closes, it's possible to reconnect.
4. If a WebSocket connection isn't established, a fallback HTTP polling will be used instead.
5. Easier scaling up of the server.

Let's take a look at Socket.IO.

## Emit
With Socket.IO, you can send and receive **any events** with **any data** you want.
If the data is an object, it will be encoded in JSON format. Alternatively, you can use binary data.

Let's start from the client side since most requests are issued by the client.

**Client**

On the client side, we can use `socket.emit()` to emit an event.

```js
socket.emit(eventName[, ...args][, ack])
```
The first argument is the event's name. Additionally, `socket.emit()` can receive any number of arguments.

```js
const editingText = document.getElementById('textArea')
socket.emit('editing', editingText.value)
```

In the example above, we emitted an event called `editing` and passed the value from the `editingText` input.

**Server**

To receive the emitted event on the server side, we use `socket.on()` to listen for the emitted event.

The first argument is the event's name, and we place a callback function as the second argument.
```js
// ...
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('editing', (text) => {
    console.log(text)
  })
})
```

Don't forget to listen for the connection event first.

## Broadcast
Let's move on to discussing what Socket.IO has done for us, starting with '**Broadcast to all or part of the connected clients.**'.

`socket.emit()` allows us to broadcast an event to **all** connected clients. But what if we only want to broadcast an event to certain clients?

We can use **'room'**!

In Socket.IO terms, 'room' refers to a channel that a client can join and leave. You can imagine it as a chat group that you can join and leave at any time.

To join a room, we use `socket.join(aRoomName)`. To leave, we use `socket.leave(aRoomName)`.

To broadcast to all clients in a room, we use `socket.to()` to select a room and then use `.emit` to send an event:

```js
socket.to('room1').emit('event', someInputValue)

// leave the room
socket.leave('room1')
```

We can also chain the `.to()` method to select several rooms:

```js
socket.to('room1').to('room2').emit('event', someInputValue)
```

## Disconnection handling
Then, let's take a look at what we can do when there are disconnections in Socket.IO.

### Connection state recovery
"Connection state recovery" means when a client disconnects from the server, Socket.IO will temporarily store all the events that **are sent by the server**.

When the connection is re-established, it will try to restore the client's state, including:

- the client's room
- missed events

As we can only catch the event on the server side in this condition, we add this feature on the server side.
```js
const io = new Server(server, {
  connectionStateRecovery: {}
})
```

The feature is practical when the connection is **temporarily** failed, and **it's expected that the connection will be restored soon**. For instance, when a user switches to a new Internet provider when she enters a café where free WIFI is provided.

Note that the events cannot always be restored, especially when the server suddenly crashes or restarts.

### Resending by the server
There are two common strategies when a client reconnects to the server and wants to restore the state:

1. The server sends the whole state without considering anything.
2. The client records the last event it has received, and the server sends the missing ones.

### Resending by the client
By default, when a client gets disconnected, all `socket.emit()` events will be buffered until reconnection.

You can rely on this feature except in two conditions:

1. The server suddenly crashes or restarts while the event is being processed.
2. The database is not available at that time.

To be more secure, we can implement an 'at least once' mechanism to ensure that a client actually sends events and receives acknowledgements from the server.

On the client side, we can create a timeout function to send events at specific intervals, or we can simply use the `retries` option.

```js
function emit(socket, event, arg) {
  socket.timeout(5000).emit(event, arg, (err) => {
    if (err) {
      // no acknowledgements from the server, let's retry
      emit(socket, event, arg)
    }
  })
}

emit(socket, 'hello', 'world')
```

```js
const socket = io({
  ackTimeout: 10000,
  retries: 3
})

socket.emit('hello', 'world')
```

As this feature requires acknowledgment from the server, we should trigger a callback function to notify clients that the server has received the event.

```js
io.on('connection', (socket) => {
  socket.on('hello', (value, callback) => {
    // acknowledgement
    callback()
  })
})
```

One of the drawbacks of using `retries` is that a request will be sent several times. So we need to do something to ensure that the database won't store multiple identical datasets.

**We can simply solve the problem by adding a unique ID to the data we are sending.**

## Acknowledgement
In the last part, we learned that a server can call a callback function to acknowledge that it has received the request from a client.

This feature helps us in building **request-response style** APIs, enhancing the flexibility of error handling.

We can add a callback function as the last argument of emit(). Then the function will be invoked after the other side acknowledges the event.

```js
socket.emit("hello", "world", (response) => {
  console.log(response)
})
```

---

And that's it, the basic notes about WebSocket and Socket.IO!