import React from "react";
import { useParams, NavLink } from "react-router-dom";

const Chapter = () => {
  const { chapterId } = useParams();

  return (
    <main className="chapter-page">

      {/* =========================
          CHAPITRE 1
      ========================= */}

      {chapterId === "1" ? (
        <>
          <header className="chapter-header">
            <span className="chapter-number">
              Chapitre 1
            </span>

            <h1>Les origines de Lazare</h1>

            <p>
              Les personnes qui ont construit notre histoire et dont nous
              souhaitons transmettre la mémoire aux générations futures.
            </p>
          </header>

          <section className="chapter-content">

            {/* Histoire de Lazare */}
            <article className="family-contribution">

              <div className="contribution-header">
                <span className="contribution-label">
                  Histoire familiale
                </span>

                <h2>Lazare Zéganadin</h2>

                <p className="contribution-date">
                  29 décembre 1889 — Inde → Indochine française
                </p>
              </div>

              <div className="contribution-body">

                <h3>Ses origines</h3>

                <p>
                  Lazare Zéganadin naît le 29 décembre 1889 à Kodambakkam,
                  dans la région de Madras, au sud de l'Inde.
                </p>

                <p>
                  Son parcours commence dans l'Inde de l'époque coloniale,
                  avant de le conduire vers l'Indochine française.
                </p>

                <h3>De l'Inde à l'Indochine</h3>

                <p>
                  Avant 1920, Lazare quitte l'Inde et s'installe en
                  Indochine française. Il y construit progressivement
                  sa vie familiale et professionnelle.
                </p>

                <div className="family-timeline">

                  <div className="timeline-item">
                    <span>1889</span>
                    <p>
                      Naissance à Kodambakkam, Madras, Inde.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span>vers 1920</span>
                    <p>
                      Installation en Indochine et mariage avec
                      Annette de Gonzaga.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span>années 1930</span>
                    <p>
                      Activité professionnelle dans l'administration
                      des Eaux et Forêts.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span>1932</span>
                    <p>
                      Naissance de son fils Henri Zéganadin à Phnom Penh.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span>vers 1939</span>
                    <p>
                      Activité comme régisseur des marchés / chef de régie.
                    </p>
                  </div>

                </div>

                <h3>Sa vie au Cambodge</h3>

                <p>
                  Lazare s'installe principalement à Phnom Penh, où sa
                  famille poursuit son histoire.
                </p>

                <p>
                  Son parcours professionnel semble l'avoir conduit entre
                  les espaces ruraux liés aux forêts et les fonctions
                  administratives liées aux marchés et à la gestion locale.
                </p>

                <h3>Une histoire à transmettre</h3>

                <p>
                  Le parcours de Lazare représente une partie importante
                  de l'histoire de notre famille : une naissance en Inde,
                  un départ vers l'Indochine française, puis une vie
                  familiale au Cambodge.
                </p>

              </div>

              <footer className="contribution-footer">

                <p>
                  ℹ️ Certaines informations concernant les fonctions
                  professionnelles et certains lieux restent à confirmer
                  par les archives.
                </p>

              </footer>

            </article>

            {/* Contributions */}
            <section className="contributions-section">

              <h2>Contributions de la famille</h2>

              <p>
                Les membres de la famille pourront ajouter ici leurs
                souvenirs, photos, documents et témoignages.
              </p>

              <button className="add-contribution">
                + Ajouter une contribution
              </button>

            </section>

          </section>
        </>
      ) : (

        /* =========================
           CHAPITRES À CONSTRUIRE
        ========================= */

        <section className="chapter-empty">

          <header className="chapter-header">
            <span className="chapter-number">
              Chapitre {chapterId}
            </span>

            <h1>Ce chapitre est en construction</h1>

            <p>
              Cette partie de notre histoire sera bientôt enrichie
              avec les souvenirs, photographies, documents et témoignages
              de la famille.
            </p>
          </header>

          <div className="chapter-empty-content">

            <p>
              Nous n'avons pas encore suffisamment d'informations
              pour raconter cette partie de notre histoire.
            </p>

            <button className="add-contribution">
              + Ajouter une contribution
            </button>

          </div>

        </section>
      )}

      {/* =========================
          NAVIGATION DU LIVRE
      ========================= */}

      <nav className="chapter-navigation">

        {Number(chapterId) > 1 ? (
          <NavLink
            to={`/book/chapter/${Number(chapterId) - 1}`}
          >
            ← Chapitre précédent
          </NavLink>
        ) : (
          <span></span>
        )}

        <NavLink to="/book">
          📚 Sommaire
        </NavLink>

        {Number(chapterId) < 5 ? (
          <NavLink
            to={`/book/chapter/${Number(chapterId) + 1}`}
          >
            Chapitre suivant →
          </NavLink>
        ) : (
          <span></span>
        )}

      </nav>

    </main>
  );
};

export default Chapter;
