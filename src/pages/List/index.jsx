import { useContext } from "react";
import { ListStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";

const List = () => {
  const { companions, setCompanions, updateCompaion } =
    useContext(GuestContext);

  const confirm = (id) => {
    const updated = companions.map((g) =>
      g.id_comp === id ? { ...g, status: true } : g
    );

    setCompanions(updated);
  };

  const inative = (id) => {
    const updated = companions.map((g) =>
      g.id_comp === id ? { ...g, status: false } : g
    );

    setCompanions(updated);
  };

  return (
    <ListStyled>
      <h2>
        Com muita alegria, convidamos você para comemorar o 1º aninho da nossa
        Isis!
      </h2>
      <p>Prepare-se para mergulhar em um mar de alegria!</p>
      <p>
        A nossa Isis vai completar seu primeiro aninho, e queremos muito dividir
        esse momento mágico com você.
      </p>
      <p>
        Não é todo dia que celebramos o primeiro aninho de vida, então venha
        fazer parte dessa data tão especial.
      </p>
      <p> Por favor, confirme sua presença!</p>

      <ul>
        {companions.map((g) => {
          return (
            <li key={g.id_comp}>
              <div className="content">
                <div className="name">
                  <img src="/icons/concha-1.png" alt="" />
                  <h3>{g.name}</h3>
                </div>
                <div className="answer">
                  <div className="yes">
                    Sim
                    <div
                      className={`box ${g.status === true ? "ativo" : ""}`}
                      onClick={() => confirm(g.id_comp)}
                    >
                      {g.status === true && (
                        <img src="/icons/icon-yes.png" alt="" />
                      )}
                    </div>
                  </div>
                  <div className="no">
                    Não
                    <div
                      className={`box ${g.status === false ? "inativo" : ""}`}
                      onClick={() => inative(g.id_comp)}
                    >
                      {g.status === false && (
                        <img src="/icons/icon-no.png" alt="" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <button onClick={() => updateCompaion()}>Confirmar presença!</button>
      </ul>
    </ListStyled>
  );
};

export default List;
