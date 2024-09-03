import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import './admin-table.css'
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile, getAllUsersProfile } from '../../redux/apiCalls/profileApiCall';


function UsersTable() {

  const dispatch = useDispatch();
  const { profiles,isProfileDeleted } = useSelector((state) => state.profile);


  useEffect(() => {
    dispatch(getAllUsersProfile());
  }, [dispatch,isProfileDeleted]);
  
  // Delete User handler
  const deleteUserHandler = (userId) => {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProfile(userId));
      }
    });
  };

  return (
    <div>
      <section className="table-container">
        <AdminSidebar />
        <div className="table-wrapper">
          <h1 className="table-title">Users</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Count</th>
                <th>User</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="table-image">
                      <img
                        src={item.profilePhoto?.url}
                        alt=""
                        className="table-user-image"
                      />
                      <span className="table-username">{item.username}</span>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/profile/${item._id}`}>View Profile</Link>
                      </button>
                      <button onClick={() => deleteUserHandler(item._id)}>Delete User</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default UsersTable
