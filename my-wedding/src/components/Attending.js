// App.js
import React, { useState } from 'react';
import axios from 'axios';

function Attending() {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [civilService, setCivilService] = useState(null);
  const [religiousService, setReligiousService] = useState(null);
  const [eveningParty, setEveningParty] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        prenom,
        adults,
        children,
        civil_service: civilService === 'Yes',
        religious_service: religiousService === 'Yes',
        evening_party: eveningParty === 'Yes'
      });

      setMessage(response.data.message);
      // Clear form values after successful registration
      setName('');
      setPrenom('');
      setAdults(0);
      setChildren(0);
      setCivilService(null);
      setReligiousService(null);
      setEveningParty(null);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Votre réponse : </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        
        <div>
          <label htmlFor="civilService">Mairie :</label>
          <label htmlFor="civilServiceYes">Oui</label>
          <input
            type="checkbox"
            id="civilServiceYes"
            checked={civilService === 'Yes'}
            onChange={() => setCivilService('Yes')}
          />
          <label htmlFor="civilServiceNo">Non</label>
          <input
            type="checkbox"
            id="civilServiceNo"
            checked={civilService === 'No'}
            onChange={() => setCivilService('No')}
          />
        </div>
        <label htmlFor="adults">Nombre d'adultes:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          required
        />

        <label htmlFor="children">Nombre d'enfants:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          required
        />
        <div>
          <label htmlFor="religiousService">Synagogue :</label>
          <label htmlFor="religiousServiceYes">Oui</label>
          <input
            type="checkbox"
            id="religiousServiceYes"
            checked={religiousService === 'Yes'}
            onChange={() => setReligiousService('Yes')}
          />
          <label htmlFor="religiousServiceNo">Non</label>
          <input
            type="checkbox"
            id="religiousServiceNo"
            checked={religiousService === 'No'}
            onChange={() => setReligiousService('No')}
          />
        </div>
 
        <div>
          <label htmlFor="eveningParty">Soirée :</label>
          <label htmlFor="eveningPartyYes">Oui</label>
          <input
            type="checkbox"
            id="eveningPartyYes"
            checked={eveningParty === 'Yes'}
            onChange={() => setEveningParty('Yes')}
          />
          <label htmlFor="eveningPartyNo">Non</label>
          <input
            type="checkbox"
            id="eveningPartyNo"
            checked={eveningParty === 'No'}
            onChange={() => setEveningParty('No')}
          />
        </div>
        <label htmlFor="adults">Nombre d'adultes:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          required
        />

        <label htmlFor="children">Nombre d'enfants:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
         
        />

        <button type="submit">Envoyer!</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Attending;
