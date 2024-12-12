import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductItemList } from "../type/productType";
import axios from "axios";

type TypeDataSlice = {
  listProduct: IProductItemList[];
};
const initialState: TypeDataSlice = {
  listProduct: [],
};
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await axios<Record<"content", IProductItemList[]>>({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    return response.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload.content;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
