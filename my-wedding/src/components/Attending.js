// App.js
import React, { useState } from "react";
import axios from "axios";

function Attending() {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adultsCivil, setAdultsCivil] = useState(0);
  const [adultsEvening, setAdultsEvening] = useState(0);
  const [childrenEvening, setChildrenEvening] = useState(0);
  const [civilService, setCivilService] = useState(null);
  const [religiousService, setReligiousService] = useState(null);
  const [eveningParty, setEveningParty] = useState(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const options = [...Array(11).keys()]; // [0, 1, 2, ..., 10]

  const handleInvitCivil = (value) => {
    if (value >= 0) {
      setAdultsCivil(value);
    }
  };
  const handleAdultsChange = (value) => {
    if (value >= 0) {
      setAdultsEvening(value);
    }
  };

  const handleChildrenChange = (value) => {
    if (value >= 0) {
      setChildrenEvening(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (civilService === "Yes" && adultsCivil === 0) ||
      (eveningParty === "Yes" && adultsEvening === 0)
    ) {
      setErrorMessage(`Merci de remplir le nombre d'invités! `);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name,
        prenom,
        adultsCivil,
        adultsEvening,
        childrenEvening,
        civilService,
        religiousService,
        eveningParty,
        // civil_service: civilService === "Yes",
        // religious_service: religiousService === "Yes",
        // evening_party: eveningParty === "Yes",
        message,
      });

      setMessage(response.data.message);
      // Clear form values after successful registration
      setName("");
      setPrenom("");
      setAdultsCivil(0);
      setAdultsEvening(0);
      setChildrenEvening(0);
      setCivilService(null);
      setReligiousService(null);
      setEveningParty(null);
      setMessage("");
      setErrorMessage("Inscription réussie!");
      setSubmitted(true);
    } catch (error) {
      setErrorMessage("Une erreur a eu lieu, veuillez réessayer!");
    }
  };

  return (
    <div className="form" id="form">
      <h1>Votre réponse : </h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form__item">
            <label htmlFor="prenom">Prénom:</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div className="form__item">
            <label htmlFor="civilService">Mairie :</label>
            <label className="checkbox" htmlFor="civilServiceYes">
              Oui
            </label>
            <input
              type="checkbox"
              id="civilServiceYes"
              checked={civilService === "Yes"}
              onChange={() => setCivilService("Yes")}
            />
            <label className="checkbox" htmlFor="civilServiceNo">
              Non
            </label>
            <input
              type="checkbox"
              id="civilServiceNo"
              checked={civilService === "No"}
              onChange={() => setCivilService("No")}
            />
          </div>
          <div className="form__item">
            <label htmlFor="adults" className="number">Nombre de personnes:</label>
            {/* <input
            type="number"
            id="adults"
            value={adultsCivil}
            // onChange={(e) => setAdultsCivil(Number(e.target.value))}
            onChange={(e) => handleInvitCivil(Number(e.target.value))}
            required={civilService === "Yes"}
          /> */}
            <select
              id="adults"
              value={adultsCivil}
              onChange={(e) => setAdultsCivil(Number(e.target.value))}
              required
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="religiousService">Synagogue :</label>
            <label className="checkbox" htmlFor="religiousServiceYes">
              Oui
            </label>
            <input
              type="checkbox"
              id="religiousServiceYes"
              checked={religiousService === "Yes"}
              onChange={() => setReligiousService("Yes")}
            />
            <label className="checkbox" htmlFor="religiousServiceNo">
              Non
            </label>
            <input
              type="checkbox"
              id="religiousServiceNo"
              checked={religiousService === "No"}
              onChange={() => setReligiousService("No")}
            />
          </div>

          <div className="form_evening">
            <label htmlFor="eveningParty">Soirée :</label>
            <label className="checkbox" htmlFor="eveningPartyYes">
              Oui
            </label>
            <input
              type="checkbox"
              id="eveningPartyYes"
              checked={eveningParty === "Yes"}
              onChange={() => setEveningParty("Yes")}
            />
            <label className="checkbox" htmlFor="eveningPartyNo">
              Non
            </label>
            <input
              type="checkbox"
              id="eveningPartyNo"
              checked={eveningParty === "No"}
              onChange={() => setEveningParty("No")}
            />
          </div>
          <div className="form__item">
            <label htmlFor="adults_evening" className="number">Nombre d'adultes:</label>
            {/* <input
              type="number"
              id="adults_evening"
              value={adultsEvening}
              // onChange={(e) => setAdultsEvening(Number(e.target.value))}
              onChange={(e) => handleAdultsChange(Number(e.target.value))}
              required={eveningParty === "Yes"}
            /> */}
            <select
              id="adults"
              value={adultsEvening}
              onChange={(e) => setAdultsEvening(Number(e.target.value))}
              required
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="children" className="number">Nombre d'enfants (-13 ans):</label>
            {/* <input
              type="number"
              id="childrenEvening"
              value={childrenEvening}
              // onChange={(e) => setChildrenEvening(Number(e.target.value))}
              onChange={(e) => handleChildrenChange(Number(e.target.value))}
            /> */}
            <select
              id="adults"
              value={childrenEvening}
              onChange={(e) => setChildrenEvening(Number(e.target.value))}
              required
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="message">Laissez-nous un petit mot:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
          <button className="button-submit" type="submit">
            Envoyer!
          </button>
        </form>
      ) : (
        <p>Merci pour votre réponse!</p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Attending;
