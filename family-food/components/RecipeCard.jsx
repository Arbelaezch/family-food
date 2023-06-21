const RecipeCard = ({ title, image }) => {
    return (
      <a href="#" className="block p-4 rounded border border-gray-200 hover:border-gray-300 transition ease-in-out duration-150">
        <img src={image} alt={title} className="mb-4"/>
        <h2 className="text-xl font-semibold">{title}</h2>
      </a>
    )
  }

export default RecipeCard