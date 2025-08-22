  export const getData = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response?.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  };
