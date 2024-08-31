import React, { useState } from "react";
import "./update-profile.css";


const user = {
    username : "youssef",
    bio : "hello this is youcef"
}

function UpdateProfileModel({ setUpdateProfile }) {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const updatedUser = {username,bio}
    
    if (password.trim()!== "") {
        updatedUser.password = password;
    }

    console.log({ updatedUser });
  };

  return (
    <div className="update-profile">
      <form onSubmit={formSubmitHandler} className="update-profile-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateProfile(false)}
            className="bi bi-x-circle-fill update-profile-form-close"
          ></i>
        </abbr>
        <h1 className="update-profile-title">Update profile</h1>
        <input
          type="text"
          className="update-profile-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter the updated username"
        />

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="3"
          className="update-post-textarea"
          placeholder="Enter the updated bio"
        ></textarea>

        <input
          type="password"
          className="update-profile-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter the updated password"
        />
        <button type="submit" className="update-profile-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UpdateProfileModel;
