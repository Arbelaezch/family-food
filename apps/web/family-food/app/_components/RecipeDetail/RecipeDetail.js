import { useState } from 'react';
import Image from 'next/image';
import { Clock, Users, AlertTriangle } from 'lucide-react';
// import styles from './RecipeDetail.module.scss';
import Navbar from "../../_components/Navbar/Navbar";

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

  const hasMetadata =
    recipe.servings ||
    recipe.prep_time ||
    recipe.cook_time ||
    recipe.total_time ||
    recipe.difficulty;

  return (
    <>
      <Navbar />

      <div className="w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[300px] max-h-[500px] mb-8">
          {recipe.image_url && !imageError ? (
            <Image
              src={recipe.image_url}
              alt={recipe.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
              <AlertTriangle size={48} />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <h1 className="text-4xl text-white m-0 shadow-text">
              {recipe.title}
            </h1>
          </div>
        </div>

        {/* Info Section */}
        <div className="px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {recipe.description && (
              <div className="flex-2">
                <div
                  className="text-lg leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={createMarkup(recipe.description)}
                />
              </div>
            )}

            {/* Metadata Column */}
            {hasMetadata && (
              <div className="flex-1 min-w-[250px]">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  {recipe.servings && (
                    <div className="flex items-center gap-3 mb-4 last:mb-0">
                      <Users className="text-gray-500" size={20} />
                      <span className="text-gray-700">
                        Servings: {recipe.servings}
                      </span>
                    </div>
                  )}
                  {recipe.prep_time && (
                    <div className="flex items-center gap-3 mb-4 last:mb-0">
                      <Clock className="text-gray-500" size={20} />
                      <span className="text-gray-700">
                        Prep Time: {formatTime(recipe.prep_time)}
                      </span>
                    </div>
                  )}

                  {recipe.cook_time && (
                    <div className="flex items-center gap-3 mb-4 last:mb-0">
                      <Clock className="text-gray-500" size={20} />
                      <span className="text-gray-700">
                        Cook Time: {formatTime(recipe.cook_time)}
                      </span>
                    </div>
                  )}

                  {recipe.total_time && (
                    <div className="flex items-center gap-3 mb-4 last:mb-0">
                      <Clock className="text-gray-500" size={20} />
                      <span className="text-gray-700">
                        Total Time: {formatTime(recipe.total_time)}
                      </span>
                    </div>
                  )}

                  {recipe.difficulty && (
                    <div className="flex items-center gap-3 mb-4 last:mb-0">
                      <AlertTriangle className="text-gray-500" size={20} />
                      <span className="text-gray-700">
                        Difficulty: {recipe.difficulty}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Ingredients Section */}
            <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Ingredients
              </h2>
              <div
                className="prose prose-lg prose-gray max-w-none [&>ul]:list-none [&>ul]:p-0 [&>ul>li]:mb-3 [&>ul>li]:pl-6 [&>ul>li]:relative [&>ul>li]:before:content-['•'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-emerald-500 [&>ul>li]:before:font-bold"
                dangerouslySetInnerHTML={createMarkup(recipe.ingredients)}
              />
            </section>

            {/* Directions Section */}
            <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Directions
              </h2>
              <div
                className="prose prose-lg prose-gray max-w-none [&>ol]:list-none [&>ol]:p-0 [&>ol]:counter-reset-[step] [&>ol>li]:mb-6 [&>ol>li]:pl-10 [&>ol>li]:relative [&>ol>li]:before:content-[counter(step)] [&>ol>li]:before:counter-increment-[step] [&>ol>li]:before:absolute [&>ol>li]:before:left-0 [&>ol>li]:before:flex [&>ol>li]:before:items-center [&>ol>li]:before:justify-center [&>ol>li]:before:w-7 [&>ol>li]:before:h-7 [&>ol>li]:before:bg-emerald-500 [&>ol>li]:before:text-white [&>ol>li]:before:rounded-full [&>ol>li]:before:text-sm [&>ol>li]:before:font-semibold"
                dangerouslySetInnerHTML={createMarkup(recipe.directions)}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;