import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RecipeCard from '../components/RecipeCard'

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8">
      <header className="mt-6">
        <img src="/welcome-image.jpg" alt="Welcome image" className="mb-6"/>
        <h1 className="text-3xl font-bold text-center">Welcome to Family Food!</h1>
        <div className="mt-6">
          <input type="text" placeholder="Search recipes" className="p-2 w-full border border-gray-300 rounded"/>
        </div>
      </header>
      <main className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <main className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <RecipeCard title="Pizza" image="/pizza.png"/>
                <RecipeCard title="Pasta" image="/pasta.jpg"/>
                <RecipeCard title="Burger" image="/burger.jpg"/>
            </div>
            </main>

        </div>
      </main>
    </div>
  )
}

export default Home
