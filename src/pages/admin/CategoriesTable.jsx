import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CategoriesTable() {
  // Delete User handler
  const deleteCategoryHandler = () => {
    Swal.fire({
      title: "Are you sure you want to delete this category?",
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
          text: "Category has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <section className="table-container">
        <AdminSidebar />
        <div className="table-wrapper">
          <h1 className="table-title">Categories</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Count</th>
                <th>Category Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>
                    <b>music</b>
                  </td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to="/posts/categories/cars">View Category</Link>
                      </button>
                      <button onClick={deleteCategoryHandler}>
                        Delete Category
                      </button>
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

export default CategoriesTable;
