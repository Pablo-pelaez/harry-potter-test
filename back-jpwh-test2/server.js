

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/students/:house', async (req, res) => {
  const { house } = req.params;

  try {
    const studentsData = await fetchStudentsInHouse(house);
    res.json(studentsData);
  } catch (error) {
    res.status(500).json({ error: `Error fetching data for house ${house}: ${error.message}` });
  }
});

async function fetchStudentsInHouse(house) {
  const apiUrl = `https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`;

  try {
    const response = await axios.get(apiUrl);
    const studentsData = response.data.map(student => ({
      name: student.name,
      house: student.house,
      image: student.image || 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }));
    return studentsData;
  } catch (error) {
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});