"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Clock, Users, AlertTriangle } from 'lucide-react';
import styles from './RecipeDetail.module.scss';
import Navbar from '../../_components/Navbar/Navbar';

const RecipeDetail = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);

  // Helper function to parse HTML content
  const createMarkup = (html) => {
    return { __html: html };
  };

  // Helper function to format time (assuming minutes input)
  const formatTime = (minutes) => {
    if (!minutes) return null;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours > 0 
      ? `${hours}h ${remainingMinutes}m`
      : `${remainingMinutes}m`;
  };

  const hasMetadata = recipe.servings || recipe.prep_time || recipe.cook_time || 
                      recipe.total_time || recipe.difficulty;
  
  return (
    <div className={styles.recipeDetail}>
        <Navbar />

      {/* Hero Section */}
      <div className={styles.hero}>
        {recipe.image_url && !imageError ? (
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            fill
            className={styles.heroImage}
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className={styles.placeholderImage}>
            <AlertTriangle size={48} />
          </div>
        )}
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>{recipe.title}</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.infoSection}>
        {/* Description and Metadata Container */}
        <div className={styles.contentContainer}>
          {/* Description Column */}
          {recipe.description && (
            <div className={styles.descriptionColumn}>
              <div 
                className={styles.description}
                dangerouslySetInnerHTML={createMarkup(recipe.description)}
              />
            </div>
          )}

          {/* Metadata Column */}
          {hasMetadata && (
            <div className={styles.metadataColumn}>
              <div className={styles.metadataCard}>
                {recipe.servings && (
                  <div className={styles.metadataItem}>
                    <Users size={20} />
                    <span>Servings: {recipe.servings}</span>
                  </div>
                )}
                
                {recipe.prep_time && (
                  <div className={styles.metadataItem}>
                    <Clock size={20} />
                    <span>Prep Time: {formatTime(recipe.prep_time)}</span>
                  </div>
                )}

                {recipe.cook_time && (
                  <div className={styles.metadataItem}>
                    <Clock size={20} />
                    <span>Cook Time: {formatTime(recipe.cook_time)}</span>
                  </div>
                )}

                {recipe.total_time && (
                  <div className={styles.metadataItem}>
                    <Clock size={20} />
                    <span>Total Time: {formatTime(recipe.total_time)}</span>
                  </div>
                )}

                {recipe.difficulty && (
                  <div className={styles.metadataItem}>
                    <AlertTriangle size={20} />
                    <span>Difficulty: {recipe.difficulty}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Ingredients Section */}
        <section className={styles.ingredientsSection}>
          <h2>Ingredients</h2>
          <div 
            className={styles.ingredients}
            dangerouslySetInnerHTML={createMarkup(recipe.ingredients)}
          />
        </section>

        {/* Directions Section */}
        <section className={styles.directionsSection}>
          <h2>Directions</h2>
          <div 
            className={styles.directions}
            dangerouslySetInnerHTML={createMarkup(recipe.directions)}
          />
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;