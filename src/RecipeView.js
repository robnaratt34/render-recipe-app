function RecipeView({recipe, index, recipeDelete}){
  return(
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt="No picture provided" /></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td><button name="delete" onClick={recipeDelete}>Delete</button></td>
    </tr>
  )
}

export default RecipeView