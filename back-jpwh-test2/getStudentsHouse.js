const axios = require('axios');

async function fetchStudentsInHouse(house) {
  const apiUrl = `https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`;

  try {
    const response = await axios.get(apiUrl);

    // Extract names and houses from the response data and store them in an object
    const studentsData = response.data.map(student => ({
      name: student.name,
      house: student.house,
      image: student.image
    }));

    // Return the array containing student names and houses
    return studentsData;
  } catch (error) {
    console.error(`Error fetching data for house ${house}:`, error.message);
    // You might want to handle the error differently or propagate it
    throw error;
  }
}

// Usage
(async () => {
  try {
    const house = 'Gryffindor'; // Replace with the desired house
    const studentsData = await fetchStudentsInHouse(house);
    
    console.log(`Students in ${house}:`, studentsData);
  } catch (error) {
    // Handle the error
    console.error('Error in main execution:', error.message);
  }
})();
