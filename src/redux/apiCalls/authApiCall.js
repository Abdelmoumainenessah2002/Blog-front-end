// authActions.js
import { authActions } from "../slices/authSlice";
import request from "../../utils/constants";
import { toast } from "react-toastify";

// Login user
export function loginUser(user,) {
  return async (dispatch) => {
    try {

      const { data } = await request.post("/api/auth/login", user);

      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}



// Logout user
export function logoutUser(user,) {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  };
}


// Register user
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/register", user);
      dispatch(authActions.register(data.message));
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// Verify email
export function verifyEmail(userid, token) {
  return async (dispatch) => {
    try {
      await request.get(`/api/auth/${userid}/verify/${token}`);
      dispatch(authActions.setIsEmailVerified());
      
    } catch (error) {
      console.log(error);
    }
  };
}