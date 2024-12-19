export const apiFetch = async ({ method, url, formData, data_type, onCompleteCallback }) => {
    const options = {
      method: method,
      credentials: 'include',
      headers: {},
    };
    
    // options.headers = {
    //   "Authorization": `Bearer ${ACCESS_TOKEN}`,
    // }
    if (data_type === "json") {
      options.headers["Content-Type"] = "application/json"
    }
  
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options.body = formData;
    }
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        let errorDetails;
        try {
          errorDetails = await response.json();
        } catch {
          errorDetails = { message: await response.text() };
        }
        const error = {
          status: response.status,
          statusText: response.statusText,
          details: errorDetails,
        };
        throw error;
      }
  
      const result = {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
  
      if (data_type === "blob") {
        result.data = await response.blob();
      } else {
        result.data = await response.json();
      }
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };