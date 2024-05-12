import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Contact } from './phoneBook.slice';

export const getFilter = (state: RootState) => state.filter;
export const getContacts = (state: RootState) => state.contacts;
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts: Contact[], filter: string) => {
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
  }
);
