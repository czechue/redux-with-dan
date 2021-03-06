### Todo
- fix CORS error

### Log
- 2-27 Redux: Toggle data in Data Base

- 2-26 Redux: Normalizing API Responses with normalizr
  - normalizing state
  - updating normalizer to newer version schemas
  - still CORS err

- 2-25 Redux: Creating Data on the Server
  - refactoring reducers to work with asynch
  - add addTodo to fake data base
  - still CORS err

- 2-24 Redux: Displaying Error Messages
  - od 2:54
  - still CORS err

- 2-23 Redux: Avoiding Race Conditions with Thunk
  - add store.getState() as a 2nd argument to the action functions
```javascript
const thunk = (store) => (next) => (action) => 
	typeof action === 'function' ?
		action(store.dispatch, store.getState) :
    next(action);
```
  - still CORS err

- 2-22 Redux: Dispatching Actions Asynchronously with Thunks
  - removing `promise middleware` from configureStore.js
  - implementing `thunk` middleware instead:
  ```javascript
  const thunk = (store) => (next) => (action) => 
    typeof action === 'function' ?
      action(store.dispatch) :
      next(action);
  ```
  - still CORS err

- 2-21 Redux: Displaying Loading Indicators
  - error to fix: `https://gyazo.com/1658581d0b9134ab93e7254be4260edb`

- 2-20 Redux: Refactoring the Reducers
  - creating complex funcional export:

  ```javascript
    export const getVisibleTodos = (state, filter) => {
      const ids = fromList.getIds(state.listByFilter[filter]);
      return ids.map((id) => fromById.getTodo(state.byId[id], id));
    };
  ```

- 2-19 Redux: Updating the State with the Fetched Data
  - removing `const allTodos = getAllTodos(state)` cuz its inpracticalt to fetch all todos from server before filtering them
  - creating new combine reducer `idsByFilter`

- 2-18 Redux: Applying Redux Middleware
  - we use `applyMiddleware` which is redux's method (it's same as custom wrapDispatchWithMiddlewares - that was written from scratch in the 2-17)
  - `npm install redux-promise` - middleware that implemence the promise support
  - `npm install redux-logger`

- 2-17 Redux: The Middleware Chain
  - genious explanation on middlewares by Dan in this chapter
  - **purpose of the middleware** is to replace the single dispatch function with the chain of composeable dispatch functions which each can do something with the action.
  It is powerful system that let us to put custom behavior before actions reach the reducers. Loggings, analytics, error handligns, asynchronous flow and more.

  ```javascript
  // promise middleware implementation:
  const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
      return action.then(next);
    }
    return next(action);
  };

  // middleware wrapper implementation
  const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => 
      store.dispatch = middleware(store)(store.dispatch)
    );
  };
  ```

- 2-16 Redux: Wrapping dispatch() to Recognize Promises
  - refactoring action creators, and make dispatch to regognize promises

- 2-15 Redux: Dispatching Actions with the Fetched Data
  - create new action creator: `receiveTodos`

- 2-14 Redux: Fetching Data on Route Change
  - all fetching in LifeCycle Hooks in VisibleTodoList component
  - use componentDidMount() - so the data is fetched at the very first time
  - use componentDidUpdate(prevProps) - so the data is fetched when filter prop is changed

- 2-13 Redux: Adding a Fake backend to the Project
  - moved so far code to the playground
  - deleting all localStorage connected files

- 2-12 Redux: Wrapping dispatch() to Log Actions
  - clever ;)

- 2-11 Redux: Normalizing the State Shape
  - extracting todo reducer in separated file
  - refactoring reducers into smaller pieces

- 2-10 Redux: Colocating Selectors with Reducers
  - creating selectors in reduxer

- 2-9 Redux: Using mapDispatchToProps() Shorthand Notation
  ```javascript
  const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
      dispatch(toggleTodo(id));
    }
  });

  // same as:
  {onTodoClick: toggleTodo} // in connect function
  ```

- 2-8 Redux: Using withRouter() to Inject the Params into Connected Components
  - install `npm instll react-router`
  - withRouter generates `history.match.params` props (instead of `params`)

- 2-7 Redux: Filtering Redux State with React Router Params
  - instead of writing your own proxy (so refreshing page with /active route will work ), you need to add to webpackconfig:
  devServer: {
      port: 8080,
      historyApiFallback: true
    }
  - `match.params.filter` are needed in order to get params (not `params.filter`)

- 2-6 Redux: Navigating with React Router <Link>
  - import Link from `react-router-dom` (instead of react-router)
  - delete action setVisibilityFilter
  - change filters name in Footer
  - refactor FilterLink with <Link>

- 2-5 Redux: Adding React Router to the Project
  - install module: `npm install react-router-dom` (instead of react-router)
  - code changes in Root.js component

- 2-4 Redux: Refactoring the Entry Point
  - add Root component with Provider in

- 2-3 Redux: Persisting the State to the Local Storage
  - install module: `npm install uuid` (instead of node-uuid)
  - install module: `npm install lodash.throttle` (isntead of lodash)

- 2-2 Redux: Supplying the Initial State
  - Redux let pass the persistedState as a 2nd argument to createStore function

- 2-1 Redux: Simplifying the Arrow Functions
  - move arch folder to playground
  - in playground/arch/1-30 - you can find complete 1 file code from previous course
  - now all code is moved to separated files
  - actions and containers are refactored in ES6 arrow function way

*********************************

- 1-30 Redux: Extracting Action Creators

- 1-29 Redux: Generating Containers with connect() from React Redux (FooterLink)
  - props are passed as a second argument to:
    const mapStateToLinkProps = (state, props) => { }

- 1-28 Redux: Generating Containers with connect() from React Redux (AddTodo)
  - add connect()
  - with AddTodo = connect()(AddTodo) - u pass 'dispatch' as a prop to AddTodo

- 1-27 Redux: Generating Containers with connect() from React Redux (VisibleTodoList)
  - add connect()
  - used mapStateToProps() and mapDispatchToProps() functions

- 1-26 Redux: Passing the Store Down with <Provider> from React Redux
  - `npm install react-redux`

- 1-25 Redux: Passing the Store Down Implicitly via Context
  - as the tittle say
  - file src/index.js
  - install prop-types: `npm install prop-types`

- 1-24 Redux: Passing the Store Down Explicitly via Props
  - as the tittle say
  - file src/index.js

- 1-23 Redux: Extracting Container Components (VisibleTodoList, AddTodo)
  - file index.js in src folder
  - TodoApp became presentational component without any data
  - Todos and Add todos were extracted

- 1-22 Redux: Extracting Container Components (FilterLink)
  - file index.js in src folder
  - FilterLink is a container - provide data and the behavior
  - Link only specify the appearence of link if it's active or non active (doesnt know about behavior)

- 1-21 Redux: Extracting Presentational Components (AddTodo, Footer, FilterLink)
  - file index.js in src folder

- 1-20 Redux: Extracting Presentational Components (Todo, TodoList)
  - file index.js in src folder

- 1-19 Redux: React Todo List Example (Filtering Todos)
  - file index.js in src folder

- 1-18 Redux: React Todo List Example (Toggling a Todo)
  - file index.js in src folder
  
- 1-17 Redux: React Todo List Example (Adding a Todo)
  - file index.js in src folder

- 1-16 Redux: Implementing combineReducer() from scratch
  - file playground/todo/1-16

- 1-15 Redux: Reducer Composition with combineReducers()
  - implement combineReducer as a Redux method
  - file: playground/todo/1-15

- 1-14 Redux: Reducer Composition with Objects
  - introduce Redux Composition pattern with many reducers
  - code went into src/index.js - but it doesn't work yet so don't bother to `npm start` it
  - old counter example - stored in 1-04-counter.js

    **PLUS:**
  - test todosApp function that combine reducers
  - test visibilityFilter function

- 1-13 Redux: Reducer Composition with Arrays
  - we are still in playground/todo 1-11 file
  - refactoring of reducer to change nested values without mutation

- 1-12 Redux: Writing a Todo List Reducer (Toggling a Todo)
  - we are still in playground/todo 1-11 file

- 1-11 Redux: Writing a Todo List Reducer (Adding a Todo)
  - write code in playground
  - test reducer 

- 1-10 Redux: Avoiding Object Mutations with Object.assign() and ...spread
  - write code in playground
  - test toggling object's properties in todo list function 

- 1-09 Redux: Avoiding Array Mutations with concat(), slice(), and ...spread
  - write code in playground
  - `npm install deep-freeze`
  - we test code - writing: `npm test` in console

- 1-08 React Counter Example + Webpack configuration
  - introduce webpack build with React (you can clone this branch and `npm install` all dependencies)
  - application will work at `localhost:8080`
  - all previous code is in playground folder
  - all new code goes to folder src

- 1-07: Implementing Store from Scratch
- 1-06: Store Methods: getState(), dispatch(), and subscribe()
  - add html
  - in html: `<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"></script>`

- 1-05: Writing a Counter Reducer with Tests
  - `npm i jest --save-dev`
  - start tests with: `npm test`

- 1-04: The Reducer Function
- 1-03: Pure and Impure Functions