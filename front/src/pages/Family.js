import React, { useEffect, useState } from "react";
import axios from "axios";

const Family = () => {
  const [family, setFamily] = useState(null);
  const [error, setError] = useState("");
  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getFamily = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user.token) {
          setError("Utilisateur non connecté");
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}api/family`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        setFamily(response.data);

        const membersResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}api/family/members`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        setMembers(membersResponse.data);
      // } catch (err) {
      //   console.error(err);
      //   setError("Impossible de récupérer votre famille");
      // }


      } catch (err) {
  console.error("ERREUR FAMILY :", err);
  console.error("Réponse serveur :", err.response?.data);
  console.error("Status :", err.response?.status);

  setError(
    err.response?.data?.error ||
    "Impossible de récupérer votre famille"
  );
}
    };

    getFamily();
  }, []);

  if (error) {
    return <div className="family-page">{error}</div>;
  }

  if (!family) {
    return <div className="family-page">Chargement...</div>;
  }

  return (
    <div className="family-page">

      <div className="family-header">
        <h1>Ma famille</h1>
        <p>Bienvenue dans votre famille </p>
      </div>

      <div className="family-card">
        <h2>{family.name}</h2>

        <p>
          Famille créée le{" "}
          {new Date(family.createdAt).toLocaleDateString("fr-FR")}
        </p>
      </div>

      <div className="family-members">

        <div className="members-header">
          <h2>Membres de la famille</h2>

          <button onClick={() => setShowForm(!showForm)}>
            Ajouter un membre
          </button>

          {showForm && (
            <div className="add-member-form">
              <input
                type="email"
                placeholder="Email du membre"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button>
                Ajouter
              </button>
            </div>
          )}
        </div>

        <div className="members-list">
          {members.map((member) => (
            <div className="member" key={member._id}>
              <h3>{member.pseudo}</h3>
              <p>{member.email}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Family;