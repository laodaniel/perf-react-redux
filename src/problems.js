import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLocale } from './store/action';
import { setLocation } from './store/action';

const Problem1 = () => {
  const { locale } = useSelector((state) => state.application);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocale('fr_FR'));
  }, [dispatch]);

  return (
    <>
      <h3>Problem 1:</h3>
      My locale is {locale}
    </>
  );
}

const Problem2 = () => {
  const { locale } = useSelector((state) => state.application, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation('SERP'));
  }, [dispatch]);

  return (
    <>
      <h3>Problem 2:</h3>
      My locale is {locale}
    </>
  );
}

const Problem3 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Problem 3:</h3>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );
}

export default { Problem1, Problem2, Problem3 };