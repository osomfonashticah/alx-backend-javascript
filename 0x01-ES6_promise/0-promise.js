function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with a timeout
    setTimeout(() => {
      // Simulating a successful response
      const response = { data: "Some data from the API" };
      resolve(response);

      // Simulating an error response
      // reject(new Error('Failed to fetch data from the API'));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
