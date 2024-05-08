---
slug: "blog-post/compound-component"
layout: ../../layouts/Blog.astro
category: "blog-post"
poster: "https://cdn.pixabay.com/photo/2017/05/10/07/49/macro-2300109_1280.jpg"
title: "React Design Pattern: Compound Component"
subtitle: "Similar to the compound eyes of insects, we divide a large component into smaller, more manageable pieces, each with its own specific mission."
relatedPosts: []
pubDate: 1707820539305
---
To ensure code readability and avoid increasing code complexity, we always structure our code following various design patterns. While these design patterns may have fancy names, if you look closely, you might find yourself using these patterns in your daily works.

**Instead of memorising all the technical details, it’s more important to concentrate on understanding why and when to use the design pattern first.** I then provide an example to enhance our memory. In the final part, we will explore the pros and cons of the design pattern to help you make a decision on whether to incorporate it or not.

# What is a compound component?

As a non-native English speaker, I grasped the concept through the novel 'The Man with the Compound Eyes' written by Taiwanese author Ming-yi Wu.

Similar to the compound eyes of insects, we divide a large component into smaller, more manageable pieces, each with its own specific mission. Take a modal component, for instance; we may divide it into `<ModalHeader>`, `<ModalContent>`, and `<ModalFooter>`.

In this way, while developing, we can easily focus on the functionality of each part and, at the same time, maintain code readability and consistency.

The compound component also provides flexibility, we can group sub-components as we want and customize each component to meet our needs.

## When can we use compound components?

**When there is a component that can be clearly divided into several, function-separated parts.**

For instance, a `<Table>` can be divided into `<TableHeader>`, `<TableBody>`, `<TablePagination>` and `<TableFooter>`… etc. Then, like playing with your lego kits,  you can build your own sets of compound components like:

- A table without `<TableHeader>`, `<TablePagination>` and `<TableFooter>`

```jsx
<Table>
	<TableBody />
</Table>
```

- A more complex table:

```jsx
<Table>
	<TableHeader />
	<TableBody />
	<TablePagination />
	<TableFooter />
</Table>
```

# Example - Modal

In the example section, let’s build a `<Modal>` component with its sub-components, including `<ModalOpenButton>`, `<ModalWrapper>`, `<ModalHeader>`, `<ModalBody>` and `<ModalFooter>`. I used Tailwind CSS to make our component prettier.

Here is the sandbox: [Here](https://codesandbox.io/p/devbox/vjfrfd?file=%2Fsrc%2FApp.tsx%3A46%2C24&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clsj08skv00063b6ha5lx0o9u%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clsj08skv00023b6h6plh95id%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clsj08skv00033b6hpjyimyc9%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clsj08skv00053b6hgmkoudqw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clsj08skv00023b6h6plh95id%2522%253A%257B%2522id%2522%253A%2522clsj08skv00023b6h6plh95id%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clsj0d3ky00023b6h48qasmlj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A61%252C%2522startColumn%2522%253A2%252C%2522endLineNumber%2522%253A61%252C%2522endColumn%2522%253A2%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FModal.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clsj0mk7000023b6he3dion1n%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A46%252C%2522startColumn%2522%253A24%252C%2522endLineNumber%2522%253A46%252C%2522endColumn%2522%253A24%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clsj0mk7000023b6he3dion1n%2522%257D%252C%2522clsj08skv00053b6hgmkoudqw%2522%253A%257B%2522id%2522%253A%2522clsj08skv00053b6hgmkoudqw%2522%252C%2522activeTabId%2522%253A%2522clsj0crpo009q3b6hmx0xkjlk%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clsj0crpo009q3b6hmx0xkjlk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clsj08skv00033b6hpjyimyc9%2522%253A%257B%2522id%2522%253A%2522clsj08skv00033b6hpjyimyc9%2522%252C%2522activeTabId%2522%253A%2522clsj0cof7007m3b6hwtohs6v1%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clsj0cof7007m3b6hwtohs6v1%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Basic Structure

Let’s start with the basic structure.

### Step 1: Create the parent component

First of all, let’s create a file named “Modal”. In this file, we will create a functional component “Modal”.

```jsx
const Modal = () => {
  return (
    <div>
      {/* Compound Components Here */}
    </div>
  );
};
```

We will assign this component as our parent component. Then, we can: 

- Place other sub-components into `<Modal>`.
- Use it as the prefix key for other sub-components.

Let’s see how we can achieve these by creating `<ModalOpenButton>` and importing it into `<Modal>`.

### Step 2: Create `<ModalOpenButton>`

In the same file, let’s create another component called `<ModalOpenButton>`. We can pass the `buttonText` prop to customize the button’s text. And the `handleOnClick` prop to open the modal.

```jsx
interface ModalOpenButton {
  buttonText?: string
  handleOnClick: () => void
}
const ModalOpenButton: FunctionComponent<ModalOpenButton> = ({ buttonText = 'Open the Modal', handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className="border p-4 bg-indigo-300 rounded-md">
      {buttonText}
    </button>
  )
}
```

### Step 3: Place `<ModalOpenButton>` into `<Modal>`

As mentioned in step 1, there are two ways to utilise `<ModalOpenButton>`.

- Place other sub-components into `<Modal>`.

Simply put `<ModalOpenButton>` directly.

```jsx
const Modal = () => {
  return (
    <div>
      <ModalOpenButton />
    </div>
  );
};
```

- Use it as the prefix key for other sub-components.

Generally, at the end of a file, we can add `Modal.ModalOpenButton = ModalOpenButton` like this:

```jsx
const Modal = () => {
  return (
    <div>
      <ModalOpenButton />
    </div>
  );
};

// Look here 👀
Modal.ModalOpenButton = ModalOpenButton;

export default Modal;
```

### Step 4: Import `<Modal>` into `<App>`

We can then import `<Modal>` into `<App>.` 

```jsx
import Modal from "./Modal";

const App = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Modal.ModalOpenButton />
      </div>
    </div>
  );
}
```

The output:

![The draft of compound component](https://i.imgur.com/hs84Msl.png)

So, here is the structure of our compound component pattern. Let’s add `<ModalHeader>`, `<ModalBody>` and `<ModalFooter>` and explore how we can benefit from the design pattern.

## Complete Sub Components

Let’s make use of the native HTML `<dialog>` element which works across the latest browser versions since March 2022 to complete the component.

This element provides the `.showModal()` and `.close()` methods to help you open and close the element itself.

To work with React, we use the `useRef` hook to help us manipulate the DOM element.

```tsx
interface ModalProps {
  isOpen: boolean
  children: ReactElement
}
const Modal: FunctionComponent<ModalProps> = ({ isOpen, children }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
  }, [isOpen])

  return (
    <div>
      <dialog ref={modalRef}>
        {children}
      </dialog>
    </div>
  )
}
```

So we have to pass `isOpen`, `handleClose` and `children` into `<Modal>`. The children prop represents `<ModalHeader>`, `<ModalBody>`, and `<ModalFooter>`, which we're going to build.

In `<App>`, let's create `isModalOpen` using `useState` and two functions to control whether the dialog is open or not.

```tsx
import React, { useState } from 'react'

import Modal from './Modal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <Modal.ModalOpenButton buttonText="Compound" handleOnClick={handleOpenModal} />
        <Modal isOpen={isModalOpen}>
          {/* TODO: add the rest components */}
        </Modal>
      </div>
    </div>
  )
}
```

And let's add the remaining components.

```tsx
interface ModalHeaderProps {
  title: string
}
const ModalHeader: FunctionComponent<ModalHeaderProps> = ({ title }) => {
  return <h2 className="text-2xl mb-4 font-bold">{title}</h2>
}

interface ModalBodyProps {
  description?: string
  children?: ReactElement
}
const ModalBody: FunctionComponent<ModalBodyProps> = ({ description, children }) => {
  return (
    <div className="flex flex-col mb-4">
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

interface ModalFooterProps {
  handleClose: () => void
  actions?: ReactElement
}
const ModalFooter: FunctionComponent<ModalFooterProps> = ({ handleClose, actions }) => {
  return (
    <div className="flex justify-end gap-2">
      <button onClick={handleClose} className="bg-red-600 p-2 rounded-md text-white">
        Close
      </button>
      {actions}
    </div>
  )
}
```

Don't forget to register these components at the end of the file.

```tsx
...
Modal.ModalOpenButton = ModalOpenButton
Modal.ModalHeader = ModalHeader
Modal.ModalBody = ModalBody
Modal.ModalFooter = ModalFooter
```

Okay! Then add these components and pass their respective props in `<App>`.

```tsx
import React, { useState } from 'react'

import Modal from './Modal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <Modal.ModalOpenButton 
					buttonText="Compound" 
					handleOnClick={handleOpenModal} />
        <Modal isOpen={isModalOpen}>
          <Modal.ModalHeader 
						title="This is a compound component" />
          <Modal.ModalBody
            description="Here is the description of the modal body."
            children={
              <label>
                What's your name?
                <input type="text" />
              </label>
            }
          />
          <Modal.ModalFooter
            handleClose={handleCloseModal}
            actions={
              <button onClick={handleCloseModal} className="bg-blue-400 p-2 rounded-md text-white">
                Confirm
              </button>
            }
          />
        </Modal>
      </div>
    </div>
  )
}
```

Finally, we can see the main difference here!

As our `<Modal>` grows bigger and bigger, we need to pass more and more props into the component. **With the compound component design, we can easily observe how each sub-component uses or needs these props without guessing**, making our code more readable and increasing maintainability.

Output:

![Compound Component](https://i.imgur.com/kg28f7l.png)

Imagine how terrible it would be if we didn't use the compound component design; it might be:

```tsx
<Modal 
  isOpen={isModalOpen}
  title="This is a compound component"
  description="Here is the description of the modal body."
  children={
		<label>
			What's your name?
      <input type="text" />
    </label>
   }
	buttonText="Compound"
	actions={
     <button onClick={handleCloseModal} className="bg-blue-400 p-2 rounded-md text-white">
       Confirm
     </button>
  }
	handleOnClick={handleOpenModal}
	handleClose={handleCloseModal} 
/>
```

It would be harder to see the relationship between the props and their components.

# Pros and Cons of Compound Component

Let's just list the pros and cons as it's more straightforward.

## Props

- **Maintainability**: The smaller the component, the easier it is to maintain. With the compound component, we have several small components, which are easy to maintain.
- **Readability**: By the names of the sub-components and the importing structure, codebase readers can easily track the code and its flow, which ultimately increases maintainability as well.
- **Flexibility**: We can extract only what we need in different scenarios instead of passing props that could be undefined.
- **Easy to Implement**: Since passing props all the way down to child components is a natural feature of React, there is no additional technical requirement to implement this powerful and elegant design pattern.

## Cons

Well, in fact, I couldn’t come up with a con for the design pattern.

But, like any other structural designs, implementing the compound component in small applications might be a waste of time. Since no matter how easy it is to build, creating a reusable component takes time.

# Conclusion

In short, the compound component design pattern involves dividing a larger component into smaller ones and then passing props separately to each component.

It helps us concentrate on each component without needing to figure out where a prop should be used in a large component, which increases maintainability and readability.

It also provides flexibility, as you can combine each component as you want.

You might not use the pattern often when you are building small or medium projects. But when it comes to a big application or building a library that others can use, it would be quite useful. Try it when there is a chance!

And that's all for the article. I hope you find it useful.

**Reference:** 

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

[https://blog.logrocket.com/creating-reusable-pop-up-modal-react/](https://blog.logrocket.com/creating-reusable-pop-up-modal-react/)
