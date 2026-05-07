# React Concepts

## 1. In what way are React components meant to be "pure functions"?

Pure functions in React mean that a function should always return the same output for the same input.

In React, this means that a component should render the same UI whenever the same props are passed to it.

---

## 2. What is a "side effect" in React? What are some examples?

A side effect in React is anything that is not directly controlled by React’s rendering process.

Examples of side effects include:

- Fetching data from an API
- Subscribing to services or events
- Setting timers (`setTimeout`, `setInterval`)
- Directly manipulating the DOM
- Accessing browser storage (`localStorage`)

---

## 3. What is NOT a "side effect" in React? Examples?

Things that are directly related to rendering the UI are not side effects.

Examples include:

- Updating UI with `useState`
- Passing and using props
- Rendering JSX based on state or props

---

## 4. When does React run your `useEffect` function? When does it NOT run the effect function?

React runs the `useEffect` function whenever the values inside the dependency array change.

- If the dependency array changes → the effect runs.
- If the dependency array does not change → the effect does not run again.

Special cases:

- `useEffect(() => {})` → runs after every render.
- `useEffect(() => {}, [])` → runs only once after the first render.

---

## 5. How would you explain what the "dependency array" is?

The dependency array is the second argument passed to the `useEffect` hook.

It tells React when to re-run the effect function.

If any value inside the dependency array changes, React will run the effect again.

Example:

```js
useEffect(() => {
  console.log("Effect ran");
}, [count]);
