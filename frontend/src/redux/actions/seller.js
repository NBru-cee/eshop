import axios from "axios";
import { server } from "../../server";
import {
   loadSellerRequest,
   loadSellerSuccess,
   loadSellerFail,
} from "../reducers/seller";

export const loadSeller = () => async (dispatch) => {
   try {
      dispatch(loadSellerRequest());
      const { data } = await axios.get(`${server}/shop/get-seller`, {
         withCredentials: true,
      });
      dispatch(loadSellerSuccess(data.seller));
   } catch (error) {
      dispatch(loadSellerFail(error.response.data.message));
   }
};
