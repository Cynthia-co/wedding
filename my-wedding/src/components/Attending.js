// App.js
import React, { useState } from 'react';
import axios from 'axios';

function Attending() {
  const [name, setName] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [civilService, setCivilService] = useState(false);
  const [religiousService, setReligiousService] = useState(false);
  const [eveningParty, setEveningParty] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        adults,
        children,
        civil_service: civilService,
        religious_service: religiousService,
        evening_party: eveningParty
      });

      setMessage(response.data.message);
      // Clear form values after successful registration
      setName('');
      setAdults(0);
      setChildren(0);
      setCivilService(false);
      setReligiousService(false);
      setEveningParty(false);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Wedding Attendance Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="adults">Number of Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          required
        />

        <label htmlFor="children">Number of Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          required
        />

        <div>
          <label htmlFor="civilService">Civil Service:</label>
          <input
            type="checkbox"
            id="civilService"
            checked={civilService}
            onChange={(e) => setCivilService(e.target.checked)}
          />
        </div>

        <div>
          <label htmlFor="religiousService">Religious Service:</label>
          <input
            type="checkbox"
            id="religiousService"
            checked={religiousService}
            onChange={(e) => setReligiousService(e.target.checked)}
          />
        </div>

        <div>
          <label htmlFor="eveningParty">Evening Party:</label>
          <input
            type="checkbox"
            id="eveningParty"
            checked={eveningParty}
            onChange={(e) => setEveningParty(e.target.checked)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Attending;
