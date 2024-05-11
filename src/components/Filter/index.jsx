import React from 'react';
import css from 'components/Filter/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/phoneBook.slice.ts';

export const Filter = props => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phoneBook.filter);

  const handleFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <span>Find contact by name</span>
      <input
        value={filter}
        onChange={e => handleFilter(e.currentTarget.value)}
      ></input>
    </div>
  );
};
