import React, { useEffect } from 'react';
import { Contact } from 'components/Contact';
import css from 'components/ContactList/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/phoneBook.slice.ts';

export const ContactList = props => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phoneBook.filter);
  const contacts = useSelector(state => state.phoneBook.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  function getFilteredData() {
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
  }

  return (
    <ul className={css.contactList}>
      {getFilteredData().map((el, number) => (
        <li className={css.contact} key={el.id}>
          <span>{number + 1}.</span>
          <Contact data={el} />
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
