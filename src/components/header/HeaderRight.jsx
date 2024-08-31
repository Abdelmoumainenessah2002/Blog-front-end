import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/apiCalls/authApiCall";

const HeaderRight = () => {

  const Dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [dropdown, setDropdown] = React.useState(false);

  return (
    <div className="header-right">
      {user ? (
        <>
          <div
            className="header-right-user-info"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span className="header-right-username">{user?.username}</span>
            <img
              src={user?.profilePhoto?.url || '/default-avatar.png'}
              alt="user photo-image"
              className="header-right-user-photo"
            />
            {dropdown && (
              <div className="header-right-dropdown">
                <div className="header-dropdown-item">
                  <Link className="" to={`/profile/${user?._id}`}>
                    <i className="bi bi-file-person"></i>
                    <span>Profile</span>
                  </Link>
                </div>
                <div className="header-dropdown-item" onClick={() => Dispatch(logoutUser())}>
                  <i className="bi bi-box-arrow-in-left"></i>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link to="/login" className="header-right-link">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="">Login</span>
          </Link>
          <Link to="/register" className="header-right-link">
            <i className="bi bi-person-plus"></i>
            <span className="">Register</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderRight;
