import Image from 'next/image';
import Link from 'next/link';
import styles from './RecipeCard.module.scss';

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <Link href={`/recipe/${recipe.slug}`} className={styles.recipeCard}>
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
      <div className={styles.recipeInfo}>
        <span>Difficulty: {recipe.difficulty[0].toUpperCase() + recipe.difficulty.slice(1)}</span>
        {recipe.rating && <span>Rating: {recipe.rating}/5</span>}
      </div>
    </Link>
  );
};

export default RecipeCard;