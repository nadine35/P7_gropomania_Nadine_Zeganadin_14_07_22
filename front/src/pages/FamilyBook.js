import React from "react";
import { NavLink } from "react-router-dom";

const FamilyBook = () => {
  return (
    <main className="family-book">

      <header className="book-header">
        <h1>📖 Notre histoire</h1>

        <p>
          L'histoire de notre famille, racontée et construite ensemble.
        </p>
      </header>

      <section className="book-chapters">

        {/* CHAPITRE 1 */}
        <article className="chapter-card">
          <span className="chapter-number">
            Chapitre 1
          </span>

          <h2>Nos ancêtres</h2>

          <p>
            Les personnes qui ont construit notre histoire
            et dont nous souhaitons transmettre la mémoire
            aux générations futures.
          </p>

          <div className="chapter-actions">
            <NavLink to="/book/chapter/1">
              <button>
                Ouvrir le chapitre
              </button>
            </NavLink>
          </div>
        </article>

        {/* CHAPITRE 2 */}
        <article className="chapter-card">
          <span className="chapter-number">
            Chapitre 2
          </span>

          <h2>De l'Inde à l'Indochine</h2>

          <p>
            Le parcours de notre famille depuis ses origines
            en Inde jusqu'à son installation en Indochine.
          </p>

          <div className="chapter-actions">
            <NavLink to="/book/chapter/2">
              <button>
                Ouvrir le chapitre
              </button>
            </NavLink>
          </div>
        </article>

        {/* CHAPITRE 3 */}
        <article className="chapter-card">
          <span className="chapter-number">
            Chapitre 3
          </span>

          <h2>La famille au Cambodge</h2>

          <p>
            La vie de la famille au Cambodge, notamment
            à Phnom Penh, et les générations qui y ont vécu.
          </p>

          <div className="chapter-actions">
            <NavLink to="/book/chapter/3">
              <button>
                Ouvrir le chapitre
              </button>
            </NavLink>
          </div>
        </article>

        {/* CHAPITRE 4 */}
        <article className="chapter-card">
          <span className="chapter-number">
            Chapitre 4
          </span>

          <h2>La guerre et le départ vers la France</h2>

          <p>
            Une période qui bouleverse la vie de la famille
            et marque le départ de Lazare et Annette vers la France.
          </p>

          <div className="chapter-actions">
            <NavLink to="/book/chapter/4">
              <button>
                Ouvrir le chapitre
              </button>
            </NavLink>
          </div>
        </article>

        {/* CHAPITRE 5 */}
        <article className="chapter-card">
          <span className="chapter-number">
            Chapitre 5
          </span>

          <h2>La famille en France</h2>

          <p>
            Une nouvelle étape de notre histoire familiale,
            commencée après l'arrivée en France.
          </p>

          <div className="chapter-actions">
            <NavLink to="/book/chapter/5">
              <button>
                Ouvrir le chapitre
              </button>
            </NavLink>
          </div>
        </article>

        {/* AJOUTER UN CHAPITRE */}
        <article className="chapter-card add-chapter">
          <button>
            + Ajouter un chapitre
          </button>
        </article>

      </section>

    </main>
  );
};

export default FamilyBook;
