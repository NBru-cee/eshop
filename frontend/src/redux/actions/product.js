import {
   productCreateRequest,
   productCreateSuccess,
   productCreateFail,
} from "../reducers/product";
import axios from "axios";
import { server } from "../../server";

//create product
export const createProduct = (newForm) => async (dispath) => {
   try {
      dispath(productCreateRequest);
      const config = {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      };

      const { data } = await axios.post(
         `${server}/product/create-product`,
         newForm,
         config
      );
      dispath(productCreateSuccess(data.product));
   } catch (error) {
      dispath(productCreateFail(error.response.data.message));
   }
};
