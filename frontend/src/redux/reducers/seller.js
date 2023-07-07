import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   loading: false,
   seller: null,
   error: null,
};

const sellerSlice = createSlice({
   name: "seller",
   initialState,
   reducers: {
      loadSellerRequest: (state) => {
         state.loading = true;
      },
      loadSellerSuccess: (state, action) => {
         state.isAuthenticated = true;
         state.loading = false;
         state.seller = action.payload;
      },
      loadSellerFail: (state, action) => {
         state.loading = false;
         state.error = action.payload;
         state.isAuthenticated = false;
      },
      clearErrors: (state) => {
         state.error = null;
      },
   },
});

export const {
   loadSellerRequest,
   loadSellerSuccess,
   loadSellerFail,
   clearErrors,
} = sellerSlice.actions;
export default sellerSlice.reducer;
