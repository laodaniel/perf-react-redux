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
  const { locale, location } = useSelector((state) => state.application, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation('SERP'));
    dispatch(setLocale('fr_FR'));
  }, [dispatch]);

  return (
    <>
      <h3>Problem 3:</h3>
      <div>My locale is {locale}</div>
      <div>My location is {location}</div>
    </>
  );
}

const Problem4 = () => {
  const [count, setCount] = useState(0);

  const expansiveFunction = (count) => {
    setTimeout(() => {
      console.log('loonnng operation!!');
    }, 1000);
    return `${count}€`;
  };

  return (
    <>
      <h3>Problem 4:</h3>
      <h4>{expansiveFunction(count)}</h4>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

const Problem5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      <h3>Problem 5:</h3>
      <button
        onClick={() => {
          setTimeout(() => {
            console.log('loonnng operation!!');
          }, 200);
        }}
      >
        Click {count}
      </button>
    </>
  );
}

export default { Problem1, Problem2, Problem3, Problem4, Problem5 };