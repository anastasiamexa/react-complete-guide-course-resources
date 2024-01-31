import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
  const dispatch = useDispatch();
  // useSelector is a hook that allows us to extract data from the Redux store state.
  const counter = useSelector(state => state.counter);

  // dispatch is a function that takes an action object as an argument.
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
