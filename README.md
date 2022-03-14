# Redux Tolkit && Query
- Why Redux Toolkit ? 
- React state management if you want to change state from another child to child you should drill component and change state from parent 
- Redux -> we have a store and we are dispatching actions, actions triggers reducer, reducer changes store  store subscribes app state
- <span style="color:orange">Redux Toolkit</span> It use to manage application state in efficient way, It provide some batteries included tool set for efficient redux development

## Diffrence of traditional redux and redux toolkit 
- In traditional redux ve are define actions and reducers seprate files
- Actions have type and reducer makes the job with action type 

- In redux toolkit we have slice, both the reducers and actions can be written under a slice 


## Redux Toolkit API
- configureStore() => wraps createStore to provide simple configuration option and good default
- createReducer() => simplifies creating reducer functions 
- createAction() => generates an action creator function for the given action type string 
- createSlice() => accepts an object of reducer funtions a slice name and an initial state value and automatically generates a slice reducer with corresponding action creators and action types
- createAsyncThunk() => accepts an action type string and a function that returns promise and generates a thunk that dispatches pending/fullfilled/rejected action types based on that promise.
- createEntityAdapter() => generates a set of reausable reducers and selectors to manage normalized data the store  