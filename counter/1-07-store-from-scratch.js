// const {createStore} = Redux;

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener => listener())
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({});

  return { getState, dispatch, subscribe }
}

const store = createStore(counter)

// 3 Important store's methods:
// store.getState()
// store.dispatch()
// store.subscribe()

console.log(store.getState()) // 0
store.dispatch({ type: 'INCREMENT'})
console.log(store.getState()) // 1

const render = () => {
  document.body.innerText = store.getState()
}

store.subscribe(render)
render()

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})