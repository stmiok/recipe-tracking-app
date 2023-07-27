import React, { useState } from "react";
import "./App.css";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
// set inintal form state  
const initialFormState = {
  name:"",
  cuisine:"",
  photo:"",
  ingredients:"",
  preparation:"",
}

const [formData, setFormData] = useState({...initialFormState});

//created change handler 
const handleChange = ({ target }) => {
  const value = target.value
  setFormData({
    ...formData,
    [target.name]: value,
  }); 
};

//created submit handler
const handleSubmit = (event) => {
  event.preventDefault();
  createRecipe(formData);
  setFormData({...initialFormState});
};

// added 3 more td sections (5 in total) with sections for labels, inputs and text areas
return (
  <form name="create" onSubmit={handleSubmit}>
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="name">
              <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              />
            </label>
          </td>
          <td>
            <label htmlFor="cuisine">
              <input
              id="cuisine"
              type="text"
              name="cuisine"
              placeholder="Cuisine"
              onChange={handleChange}
              value={formData.cuisine}
              />
            </label>
          </td>
          <td>
          <label htmlFor="photo">
              <input
              id="photo"
              type="url"
              name="photo"
              placeholder="URL"
              onChange={handleChange}
              value={formData.photo}
              />
            </label>
          </td>
          <td>
          <label htmlFor="ingredients">
              <textarea
              id="ingredients"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              />
            </label>
          </td>
          <td>
          <label htmlFor="preparation">
              <textarea
              id="preparation"
              type="text"
              name="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={formData.preparation}
              />
            </label>
          </td>
          <td>
            <button type="submit">Create</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
);
}

export default RecipeCreate;
