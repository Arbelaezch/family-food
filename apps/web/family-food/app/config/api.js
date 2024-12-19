const getApiBaseUrl = () => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.warn('NEXT_PUBLIC_API_URL is not defined');
      // Fallback values
      return process.env.NODE_ENV === 'development' 
        ? 'http://127.0.0.1:8000'
        : 'https://christiandonovan.ca';
    }
    return process.env.NEXT_PUBLIC_API_URL;
  };
  
  export const apiConfig = {
    baseUrl: getApiBaseUrl(),
    endpoints: {
      recipes: '/api/v1/recipes/',
      // Add other endpoints here
    }
  };