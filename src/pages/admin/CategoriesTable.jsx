import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, fetchCategories } from "../../redux/apiCalls/categotyApiCall";


function CategoriesTable() {

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Delete User handler
  const deleteCategoryHandler = (categoryId) => {
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
        dispatch(deleteCategory(categoryId));
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
              {categories.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <b>{item.title}</b>
                  </td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/posts/categories/${item.title}`}>View Category</Link>
                      </button>
                      <button onClick={() => deleteCategoryHandler(item._id)}>
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
