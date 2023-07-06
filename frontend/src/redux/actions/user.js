import axios from "axios";
import { server } from "../../server";
import {
   loadUserRequest,
   loadUserSuccess,
   loadUserFail,
} from "../reducers/user";

export const loadUser = () => async (dispatch) => {
   try {
      dispatch(loadUserRequest());
      const { data } = await axios.get(`${server}/user/get-user`, {
         withCredentials: true,
      });
      dispatch(loadUserSuccess(data.user));
   } catch (error) {
      dispatch(loadUserFail(error.response.data.message));
   }
};
