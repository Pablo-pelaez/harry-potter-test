// const https = require('https');

// const apiUrl = 'https://hp-api.onrender.com/api/characters/students';

// https.get(apiUrl, (response) => {
//   let data = '';

//   // A chunk of data has been received.
//   response.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received.
//   response.on('end', () => {
//     try {
//       // Parse the received data as JSON.
//       const studentsData = JSON.parse(data);

//       // Log or process the data as needed.
//       console.log('API Response:', studentsData);
//     } catch (error) {
//       console.error('Error parsing JSON:', error.message);
//     }
//   });
// }).on('error', (error) => {
//   console.error('Error fetching data:', error.message);
// });

const axios = require('axios');

async function fetchStudentNames() {
  const apiUrl = 'https://hp-api.onrender.com/api/characters/students';

  try {
    const response = await axios.get(apiUrl);

    // Extract names from the response data
    const studentNames = response.data.map(student => student.name);

    // Return an object or array containing the names
    return {
      studentNamesArray: studentNames,
      studentNamesObject: Object.fromEntries(studentNames.map(name => [name, true]))
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    // You might want to handle the error differently or propagate it
    throw error;
  }
}
//Proving the results
(async () => {
    try {
      const { studentNamesArray, studentNamesObject } = await fetchStudentNames();
      
      console.log('Student Names Array:', studentNamesArray);
      console.log('Student Names Object:', studentNamesObject);
    } catch (error) {
      // Handle the error
      console.error('Error in main execution:', error.message);
    }
  })();