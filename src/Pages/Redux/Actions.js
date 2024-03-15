// Actions.js

export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book
});

export const deleteBook = (index) => ({
  type: DELETE_BOOK,
  payload: index
});

export const editBook = (index, editedBook) => ({
  type: EDIT_BOOK,
  payload: { index, editedBook }
});
