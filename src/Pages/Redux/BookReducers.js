// Reducers.js

import { ADD_BOOK,EDIT_BOOK, DELETE_BOOK } from "./Actions";

const initialState = {
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((_, index) => index !== action.payload)
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book, index) => {
          if (index === action.payload.index) {
            return {
              ...book,
              ...action.payload.editedBook
            };
          }
          return book;
        })
      };
    default:
      return state;
  }
};

export default bookReducer;
