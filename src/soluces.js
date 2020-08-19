import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
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

const Soluce3 = () => (
  <>
    <h3>Solution 3:</h3>
  </>
)

export default {
  Soluce1,
  Soluce2,
  Soluce3,
};