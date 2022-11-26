import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, headers } from "../api/API";

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = fetch(`${BASE_URL}books`, {
    method: "GET",
    headers: headers
  }).then((res) =>  res.json())
  const myJSON = response.then(res => res.data.list)
  return myJSON
});

export const fetchBook = createAsyncThunk("book/fetchBook", async (id) => {
    const response = fetch(`${BASE_URL}books/${id}`, {
      method: "GET",
      headers: headers
    }).then((res) =>  res.json())
    const myJSON = response.then(res => res.data)
    return myJSON
  });

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async ({ id }) => {
    return fetch(`${BASE_URL}books/${id}`, {
      method: "DELETE",
      headers: headers
    }).then((res) => res.json());
  }
);
export const postBook = createAsyncThunk(
  "book/postBook",
  async ({ values }) => {
    return fetch(`${BASE_URL}books`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        author: values.author,
        isPublished: true,
        genreIds: values.genreIds,
        fileId: 27,
        pdf: values.pdf
      }),
    }).then((res) => res.json());
  }
);
export const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({ id, values }) => {
    return fetch(`${BASE_URL}books/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        author: values.author,
        isPublished: true,
        genreIds: values.genreIds,
        fileId: 27,
        pdf: values.pdf
      }),
    }).then((res) => res.json());
  }
);

const BookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    book:{},
    loading: false,
    error: null,
    description: "",
    edit: false,
  },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload.edit;
      state.description = action.payload.description;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchBook.pending]: (state, action) => {
        state.loading = true;
    },
    [fetchBook.fulfilled]: (state, action) => {
        state.loading = false;
        state.book = action.payload;
    },
    [fetchBook.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [deleteBook.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = [action.payload];
    },
    [deleteBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [postBook.pending]: (state, action) => {
      state.loading = true;
    },
    [postBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = [action.payload];
    },
    [postBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateBook.pending]: (state, action) => {
      state.loading = true;
    },
    [updateBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = [action.payload];
    },
    [updateBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { setEdit } = BookSlice.actions;
export default BookSlice.reducer;
