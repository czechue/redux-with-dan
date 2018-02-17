### Log
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

### general todos
- add editor.config (2 spacec instead of 4)