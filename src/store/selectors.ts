import { RootState } from "store";

export const getFilter = (state: RootState) => state.phoneBook.filter;
export const getContacts = (state: RootState) => state.phoneBook.contacts;
export const getFilteredContacts = (state: RootState) => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
}
