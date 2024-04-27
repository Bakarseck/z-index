import { toast } from "react-toastify";

export const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const jsonData = await response.json(); // Parse JSON regardless of response status
  
      if (!response.ok) {
        // Check for the unique constraint violation
        if (jsonData.error && jsonData.error.includes('Unique constraint failed')) {
          throw new Error("The email address is already in use.");
        }
        // Handle other types of errors
        throw new Error(jsonData.message || "An error occurred");
      }
      
      return jsonData;
    } catch (error) {
      console.error("Error in postData:", error);
      // Re-throw the error to be handled in the calling function
      throw error;
    }
  };
  

export const getData = async (url, params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${url}?${query}`);
    return await response.json();
  } catch (error) {
    console.error("Error in getData:", error);
    throw error;
  }
};
