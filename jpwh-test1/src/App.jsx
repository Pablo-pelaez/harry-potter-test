import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';

const App = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [house, setHouse] = useState('Gryffindor'); // Replace with the desired house
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/students/${house}`);
        setStudentsData(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false)
      }
    };

    fetchData();
  }, [house]);

  return (
    <div className="container">
      <h1 id="title">Students in {house}</h1>

      <div className="containerButton">
      <button className='houseName' onClick={() => {
        setHouse('RavenClaw')
      }}>RavenClaw</button>

      <button className='houseName' onClick={() => {
        setHouse('Hufflepuff')
      }}>Hufflepuff</button>

      <button className='houseName' onClick={() => {
        setHouse('Gryffindor')
      }}>Gryffindor</button>
      <button className='houseName' onClick={() => {
        setHouse('Slytherin')
      }}>Slytherin</button>
      </div>
      <p>{loading ?? (<h1>Loading, please wait</h1>)}</p>
      <div className="cards-container">
        {studentsData.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default App;
