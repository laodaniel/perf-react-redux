import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, shallowEqual, batch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLocale, setLocation } from './store/action';

const Soluce1 = () => {
  const { locale } = useSelector((state) => state.application, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocale('fr_FR'));
  }, [dispatch]);

  return (
    <>
      <h3>Solution 1:</h3>
      My locale is {locale}
    </>
  );
}

const Soluce2 = () => {
  const locale = useSelector((state) => state.application.locale);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation('SERP'));
  }, [dispatch]);

  return (
    <>
      <h3>Solution 2:</h3>
      My locale is {locale}
    </>
  );
}

const Soluce3 = () => {
  const { locale, location } = useSelector((state) => state.application, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setLocation('SERP'));
      dispatch(setLocale('fr_FR'));
    });
  }, [dispatch]);

  return (
    <>
      <h3>Soluce 3:</h3>
      <div>My locale is {locale}</div>
      <div>My location is {location}</div>
    </>
  );
}

const Soluce4 = () => {
  const [count, setCount] = useState(0);

  const expansiveFunction = (count) => {
    setTimeout(() => {
      console.log('Soluce: loonnng operation!!');
    }, 1000);
    return `${count}€`;
  };

  const result = useMemo(() => expansiveFunction(count), [count]);

  return (
    <>
      <h3>Soluce 4:</h3>
      <h4>{result}</h4>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

const Soluce5 = () => {
  const { locale, location } = useSelector((state) => state.application, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setLocation('SERP'));
      dispatch(setLocale('fr_FR'));
    });
  }, [dispatch]);

  return (
    <>
      <h3>Soluce 4:</h3>
      <div>My locale is {locale}</div>
      <div>My location is {location}</div>
    </>
  );
}

export default {
  Soluce1,
  Soluce2,
  Soluce3,
  Soluce4,
  Soluce5,
};