import Image from 'next/image';
import styles from './RecipeCard.module.scss';

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={recipe.image_url} 
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.recipeImage}
          onError={(e) => {
            e.target.src = '/placeholder-recipe.jpg';
          }}
        />
      </div>
      <h3 className={styles.title}>{recipe.title}</h3>
      <p className={styles.description}>
        {recipe.description || 'No description available'}
      </p>
      <div className={styles.recipeInfo}>
        <span>Difficulty: {recipe.difficulty}</span>
        {recipe.rating && <span>Rating: {recipe.rating}/5</span>}
      </div>
    </div>
  );
};

export default RecipeCard;