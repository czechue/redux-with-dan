const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

// instead of MJ we will use Jest

describe('Counter Reducer', () => {
  test('increment', function() { 
    expect(counter(0, { type: 'INCREMENT' })).toBe(1)
  })

  test('increment', function () {
    expect(counter(1, { type: 'INCREMENT' })).toBe(2)
  })

  test('decrement', function () {
    expect(counter(1, { type: 'DECREMENT' })).toBe(0)
  })

  test('decrement', function () {
    expect(counter(0, { type: 'DECREMENT' })).toBe(-1)
  })

  test('something else', function() {
    expect(counter(5, { type: 'SOMETHING ELSE' })).toBe(5)
  })

  test('undefined', function () {
    expect(counter(undefined, { })).toBe(0)
  })  
})
