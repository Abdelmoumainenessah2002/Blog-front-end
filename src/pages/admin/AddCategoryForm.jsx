import React, { useState } from 'react'
import { toast } from 'react-toastify';

function AddCategoryForm() {
    
    const [title, setTitle] = useState("");

    // Form submit handler 
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(title.trim() === "") return toast.error("Category title cannot be empety");

        console.log({title})
    }
  
    return (
      <div>
        <div className="add-category">
          <h6 className="add-category-title">Add New Category</h6>
          <form onSubmit={formSubmitHandler}>
            <div className="add-category-form-group">
              <label htmlFor="title">Category title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter Category Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button type="submit" className="add-category-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
}

export default AddCategoryForm
