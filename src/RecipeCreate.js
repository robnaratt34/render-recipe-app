import React, { useState } from "react";

function RecipeCreate({recipeAdd}) {
  const initialState={
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }
  const [formData, setFormData] = useState({...initialState})
  const handleSubmit=(event)=>{
    event.preventDefault();
    recipeAdd(formData);
    setFormData({...initialState});
  }
  const handleChange=({target})=>{
    setFormData({...formData, [target.name]:target.value})
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input id="name" type="text" name="name" onChange={handleChange} value={formData.name} />
              </label>
            </td> 
            <td>
              <label htmlFor="cuisine">
                <input id="cuisine" type="text" name="cuisine" onChange={handleChange} value={formData.cuisine} /> 
              </label>
            </td> 
            <td>
              <label htmlFor="photo">
                <input id="photo" type="url" name="photo" onChange={handleChange} value={formData.photo} />
              </label>
            </td> 
            <td>
              <label htmlFor="ingredients">
                <textArea id="ingredients" name="ingredients" onChange={handleChange} value={formData.ingredients} />
              </label>
            </td> 
            <td>
              <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" onChange={handleChange} value={formData.preparation} />
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
