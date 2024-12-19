"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiFetch } from '../../../_components/api/apiFetch';
import { apiConfig } from '../../../config/api';
import RecipeDetail from '../../../_components/RecipeDetail/RecipeDetail';
import styles from './page.module.scss';

export default function RecipePage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const url = `${apiConfig.baseUrl}${apiConfig.endpoints.recipes}${slug}/`;
        const response = await apiFetch({
          method: "GET",
          url: url,
          credentials: "include",
        });

        if (response.status === 200) {
          setRecipe(response.data);
        } else {
          throw new Error('Recipe not found');
        }
      } catch (err) {
        console.error('Error fetching recipe:', err);
        setError('Failed to load recipe. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchRecipe();
    }
  }, [slug]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!recipe) {
    return <div className={styles.error}>Recipe not found</div>;
  }

  return <RecipeDetail recipe={recipe} />;
}