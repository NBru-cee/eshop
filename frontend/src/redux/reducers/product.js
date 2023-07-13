import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isLoading: true,
   success: false,
   error: null,
   product: null,
};

const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      productCreateRequest: (state) => {
         state.isLoading = true;
      },
      productCreateSuccess: (state, action) => {
         state.isLoading = false;
         state.product = action.payload;
         state.success = true;
      },
      productCreateFail: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
         state.success = false;
      },
      clearErrors: (state) => {
         state.error = null;
      },
   },
});

export const {
   productCreateRequest,
   productCreateSuccess,
   productCreateFail,
   clearErrors,
} = productSlice.actions;

export default productSlice.reducer;
