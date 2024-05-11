import css from 'components/PhoneBook/index.module.css';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';

export const PhoneBook = () => {
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
