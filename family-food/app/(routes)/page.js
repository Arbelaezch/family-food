"use client";

import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '../_components/Navbar/Navbar';

export default function Home() {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // TODO: Implement the function to fetch recipes based on the search query
  const fetchRecipes = async () => {
    // Fetch the recipes from your Strapi/Postgres backend
    // const response = await fetch(`/api/recipes?search=${searchQuery}`);
    // const recipes = await response.json();
    // return recipes;
  };


  return (
    <main className={styles.main}>
      <Navbar />
      <h2>Arbelaez Family Recipes</h2>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={fetchRecipes}>Search</button>
      </div>
      
      {/* Recipes Grid */}
      <div className={styles.recipesGrid}>
        {/* Map through your recipes and render them here */}
        {/* {recipes.map((recipe) => (
          <div className={styles.recipeCard} key={recipe.id}>
            <Image src={recipe.image} alt={recipe.title} width={100} height={100} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))} */}
      </div>


      
    </main>
  )
}
