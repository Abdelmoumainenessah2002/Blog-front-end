import React, { useEffect, useState } from "react";
import "./profile.css";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UpdateProfileModel from "./UpdateProfileModel";
import {useDispatch, useSelector} from "react-redux";
import { getUserProfile, uploadProfilePhoto } from "../../redux/apiCalls/profileApiCall";
import { useParams } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  // get user id from url
  const { id } = useParams();

  // states
  const [file, setFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(id));
    window.scrollTo(0, 0);
  }, [id,dispatch]);

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("There is no file uploaded!");

    const formData = new FormData();
    formData.append("image", file);

    // dispatch upload profile photo action
    dispatch(uploadProfilePhoto(formData));
  };

  // Delete post handler
  const deleteAccountHandler = () => {
    Swal.fire({
      title: "Are you sure you want to delete your account?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
            alt="profile "
            className="profile-image"
          />
          <form className="" onSubmit={formSubmitHandler}>
            <abbr title="choose profile photo">
              <label
                htmlFor="file"
                className="bi bi-camera-fill upload-profile-photo-icon"
              ></label>
            </abbr>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit" className="upload-profile-photo-btn">
              Upload
            </button>
          </form>
        </div>
        <h1 className="profile-username">{profile?.username}</h1>
        <p className="profile-bio">
          {profile?.Bio
            ? profile?.Bio
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quidem!"}
        </p>
        <div className="user-date-joined">
          <strong>
            Date Joined:
            <span> { new Date(profile?.createdAt).toDateString() } </span>
          </strong>
        </div>
        <button
          className="profile-update-btn"
          onClick={() => setUpdateProfile(true)}
        >
          <i className="bi bi-file-person-fill"></i>
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2 className="profile-posts-list-title">
          {profile?.username} posts
        </h2>
        <PostList posts={posts} />
      </div>
      <button onClick={deleteAccountHandler} className="delete-account-btn">
        Delete Your Account
      </button>
      {updateProfile && (
        <UpdateProfileModel profile={profile} setUpdateProfile={setUpdateProfile} />
      )}
    </section>
  );
}

export default Profile;
