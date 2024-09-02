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
export function uploadProfilePhoto(newPhoto, userId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(
        `/api/users/profile/profile-photo-upload`,
        newPhoto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(profileActions.setProfilePhoto(data.profilePhoto));

      // update user photo in auth slice
      dispatch(authActions.setUserPhoto(data.profilePhoto));
      toast.success(data.message);

      // update user photo in local storage
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profilePhoto = data?.profilePhoto;
      localStorage.setItem("userInfo", JSON.stringify(user));

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// update user profile
// upload profile photo
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

      console.log(data);

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