import { profileActions } from "../slices/profileSlice";
import { authActions } from "../slices/authSlice";
import request from "../../utils/constants";
import { toast } from "react-toastify";

// get user profile
export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/users/profile/${userId}`);
      dispatch(profileActions.setProfile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// upload profile photo
export function uploadProfilePhoto(newPhoto) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(
        `/api/users/profile/profile-photo-upload`,
        newPhoto, // Send the FormData directly
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      // Update the profile photo in the profile slice
      dispatch(profileActions.setProfilePhoto(data.profilePhoto));

      // Update the user photo in the auth slice
      dispatch(authActions.setUserPhoto(data.profilePhoto));
      toast.success(data.message);

      // Update user photo in local storage
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profilePhoto = data.profilePhoto;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// update user profile
export function updateProfile(userId, profile) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/users/profile/${userId}`,
        profile,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(profileActions.updateProfile(data));

      // update user photo in auth slice
      dispatch(authActions.setUsername(data.username));

      // update user photo in local storage
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.username = data?.username;
      localStorage.setItem("userInfo", JSON.stringify(user));

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// delete user account
export function deleteProfile(userId) {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      const { data } = await request.delete(
        `/api/users/profile/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(profileActions.setIsProfileDeleted());
      toast.success(data?.message);

      setTimeout(() => {
        dispatch(profileActions.clearIsProfileDeleted());
      }
      , 2000);
    
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(profileActions.clearLoading());
    }
  };
}


// get users count (for admin dashbord)
export function getUsersCount() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(
        `/api/users/count`,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(profileActions.setUsersCount(data));
    
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// get all users profiles (for admin dashbord)
export function getAllUsersProfile() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(
        `/api/users/profile`,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(profileActions.setProfiles(data));
    
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}