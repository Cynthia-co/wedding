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
  const [sucessMessage, setSuccessMessage] = useState("");
  const options = [...Array(11).keys()]; // [0, 1, 2, ..., 10]
 
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
      const response = await axios.post("https://109.234.165.183:3000/register", {
        name,
        prenom,
        adultsCivil,
        adultsEvening,
        childrenEvening,
        civilService,
        religiousService,
        eveningParty,
        message,
      });

      setSuccessMessage(response.data.message);
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
      if(error.response){
        setErrorMessage(`Erreur: ${error.response.data.message}`);
    } else if (error.request) {
      // La requête a été envoyée, mais aucune réponse n'a été reçue
      setErrorMessage("Pas de réponse du serveur. Veuillez réessayer plus tard.");
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      setErrorMessage("Une erreur inattendue s'est produite. Veuillez réessayer.");
    }
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
          <div className="form-civil">
            <div className="form__item">
              <div className="form-mairie">
                <label htmlFor="civilService">Mairie :</label>
                <div className="checkbox-group">
                  <label className="checkbox" htmlFor="civilServiceYes">
                    Oui
                  </label>
                  <input
                    type="checkbox"
                    id="civilServiceYes"
                    checked={civilService === "Yes"}
                    onChange={() => setCivilService("Yes")}
                  />
                </div>
                <div className="checkbox-group">
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
              </div>
              <div className="form__item">
                <label htmlFor="adults" className="number">
                  Nombre de personnes:
                </label>

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
            </div>
          </div>
          <div className="syna">
            <label htmlFor="religiousService">Synagogue :</label>
            <div className="checkbox-group">
              <label className="checkbox" htmlFor="religiousServiceYes">
                Oui
              </label>
              <input
                type="checkbox"
                id="religiousServiceYes"
                checked={religiousService === "Yes"}
                onChange={() => setReligiousService("Yes")}
              />
            </div>
            <div className="checkbox-group">
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
          </div>

          <div className="form_evening">
            <label htmlFor="eveningParty">Soirée :</label>
            <div className="form-soir">
              <div className="checkbox-group">
                <label className="checkbox" htmlFor="eveningPartyYes">
                  Oui
                </label>
                <input
                  type="checkbox"
                  id="eveningPartyYes"
                  checked={eveningParty === "Yes"}
                  onChange={() => setEveningParty("Yes")}
                />
              </div>
              <div className="checkbox-group">
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
            </div>
          </div>
          <div className="form__item">
            <label htmlFor="adults_evening" className="number">
              Nombre d'adultes:
            </label>

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
            <label htmlFor="children" className="number">
              Nombre d'enfants (-10 ans):
            </label>

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
