import React from 'react';

const RecipeDirections = ({ directions }) => {
  return (
    <div
      className="prose prose-lg prose-gray max-w-none 
        [&>ul]:list-none [&>ul]:p-0 [&>ul>li]:mb-3 [&>ul>li]:pl-6 [&>ul>li]:relative 
        [&>ul>li]:before:content-['•'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 
        [&>ul>li]:before:text-emerald-500 [&>ul>li]:before:font-bold
        [&>ol]:list-none [&>ol]:p-0 [&>ol>li]:mb-6 [&>ol>li]:pl-10 [&>ol>li]:relative 
        [&>ol>li]:before:absolute [&>ol>li]:before:left-0 [&>ol>li]:before:w-7 
        [&>ol>li]:before:h-7 [&>ol>li]:before:bg-emerald-500 [&>ol>li]:before:text-white 
        [&>ol>li]:before:rounded-full [&>ol>li]:before:flex [&>ol>li]:before:items-center 
        [&>ol>li]:before:justify-center [&>ol>li]:before:text-sm [&>ol>li]:before:font-semibold"
      dangerouslySetInnerHTML={{ __html: directions }}
    />
  );
};

const styles = `
  .prose ol > li::before {
    content: counter(list-item) !important;
  }
`;

const RecipeDirectionsWrapper = ({ directions }) => {
  return (
    <>
      <style>{styles}</style>
      <RecipeDirections directions={directions} />
    </>
  );
};

export default RecipeDirectionsWrapper;