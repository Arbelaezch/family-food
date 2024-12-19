"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '../_components/Navbar/Navbar';
import { apiFetch } from '../_components/api/apiFetch';
import { apiConfig } from '../config/api';
import RecipeCard from '../_components/RecipeCard/RecipeCard';

export default function Home() {
  const [allRecipes, setAllRecipes] = useState([]); // Cache of all recipes
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  const ITEMS_PER_PAGE = 12;
  const DIFFICULTIES = ['easy', 'medium', 'hard'];
  const CATEGORIES = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' }
  ];

  // Fetch all recipes on component mount
  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const url = `${apiConfig.baseUrl}${apiConfig.endpoints.recipes}`;

        // let url = "http://127.0.0.1:8000/api/v1/recipes/";
        // let url = "https://christiandonovan.ca/api/v1/recipes/";

        const response = await apiFetch({
          method: "GET",
          url: url,
          credentials: "include",
        });

        // Check if the response contains the data structure we expect
        if (response.status === 200 && response.data?.results) {
          setAllRecipes(response.data.results);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to fetch recipes. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllRecipes();
  }, []);

  // Filter recipes based on search query, category, and difficulty
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      // Search text filter
      const matchesSearch = 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (recipe.description && recipe.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category filter
      const matchesCategory = 
        !categoryFilter || recipe.category.toLowerCase() === categoryFilter.toLowerCase();
      
      // Difficulty filter
      const matchesDifficulty = 
        !difficultyFilter || recipe.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
      
      // Return true only if all conditions are met
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [allRecipes, searchQuery, categoryFilter, difficultyFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredRecipes, currentPage]);

  // Handle input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleDifficultyChange = (e) => {
    setDifficultyFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Pagination controls
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <h2>Arbelaez Family Recipes</h2>

      {/* Search Bar and Filters */}
      <div className={styles.searchBarContainer}>
        <div>
          <select
            value={difficultyFilter}
            onChange={handleDifficultyChange}
            className={styles.filterSelect}
          >
            <option value="">All Difficulties</option>
            {DIFFICULTIES.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className={styles.filterSelect}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className={styles.loadingGrid}>
          {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
            <div key={index} className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonText}></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Recipes Grid */}
          <div className={styles.recipesGrid}>
            {paginatedRecipes.map((recipe) => (
              recipe ? <RecipeCard key={recipe.id} recipe={recipe} /> : null
            ))}
          </div>

          {/* No Results Message */}
          {filteredRecipes.length === 0 && (
            <p className={styles.noResults}>
              No recipes found matching your criteria
              {searchQuery && ` including "${searchQuery}"`}
            </p>
          )}

          {/* Pagination Controls */}
          {filteredRecipes.length > 0 && totalPages > 1 && (
            <div className={styles.pagination}>
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}