import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, selectCount } from './counterSlice';

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  const count = useSelector((state) => selectCount(state));
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(counterActions.increment())}>+</button>
      <button onClick={() => dispatch(counterActions.decrement())}>-</button>
      <div>
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(e.target.valueAsNumber)}
        ></input>
        <button
          onClick={() => dispatch(counterActions.incrementByAmount(increment))}
        >
          Increment
        </button>
        <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
