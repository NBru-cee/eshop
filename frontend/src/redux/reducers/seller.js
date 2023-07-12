import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   isLoading: false,
   seller: null,
   error: null,
};

const sellerSlice = createSlice({
   name: "seller",
   initialState,
   reducers: {
      loadSellerRequest: (state) => {
         state.isLoading = true;
      },
      loadSellerSuccess: (state, action) => {
         state.isAuthenticated = true;
         state.isLoading = false;
         state.seller = action.payload;
      },
      loadSellerFail: (state, action) => {
         state.isLoading = false;
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
