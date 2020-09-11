1. What problem does the context API help solve?
Context API was created specifically to resolve sharing state down a component tree. This solution prevents prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions carry a payload of information to the store.
Reducers are functions that take a previous state and action and return the next state.
Store holds the state tree and the only way to modify it is to dispatch an action onto it.

The store in redux is known as the single source of truth as it's where our state data resides.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state holds state for the entire application, whereas Component state holds it for each individual component. Component state is best used to create reuseable code for future applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows us to dispatch async actions and is considered middleware. action-creators are called by redux-thunk to return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I really enjoy Redux as it allows us to have predictable state updates. It makes it a lot easier to understand how data flow works in an application.