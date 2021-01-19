// REDUX TOOLKIT
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/Delete');

export const filterChange = createAction('contacts/FilterChange');

// REDUX
// import { v4 as uuidv4 } from 'uuid';
// import { ADD, DELETE, FILTER_CHANGE } from './contacts-types';

// export const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const filterChange = value => ({
//   type: FILTER_CHANGE,
//   payload: value,
// });
