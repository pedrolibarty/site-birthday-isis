import { useContext, useEffect } from "react";
import { ManagerStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";

const Manager = () => {
  const { guests, getGuests, allCompanions, getAllCompanions } = useContext(GuestContext);

  useEffect(() => {
    getGuests();
    getAllCompanions();
  }, []);

  return (
    <ManagerStyled>
      <ul className="status">
        <li>
          <h3>Todos</h3>
          <div className="row">{allCompanions.length}</div>
        </li>
        <li>
          <h3>Confirmados</h3>
          <div className="row">
            {
              ((allCompanions.filter((c) => c.status).length / allCompanions.length) * 100).toFixed(0)%
            } <div className="line"></div> {allCompanions.filter((c) => c.status).length}
          </div>
        </li>
        <li>
          <h3>Recusados</h3>
          <div className="row">
            {
              ((allCompanions.filter((c) => c.status === false).length / allCompanions.length) * 100).toFixed(0)%
            } <div className="line"></div> {allCompanions.filter((c) => c.status === false).length}
          </div>
        </li>
        <li>
          <h3>Sem resposta</h3>
          <div className="row">
            {
              ((allCompanions.filter((c) => c.status === null).length / allCompanions.length) * 100).toFixed(0)%
            } <div className="line"></div> {allCompanions.filter((c) => c.status === null).length}
          </div>
        </li>
      </ul>

      <ul className="convites">
        {
          guests.map((g) => {
            return (
              <li className="convite-line" key={g.id_guest}>
          <div className="container">
            <div className="content">
              <h2>{g.name}</h2>
            </div>
            <div className="send">
              <p>Enviado?</p>
              <div className={`box ${g.ind_env ? "env" : ""}`}></div>
            </div>
          </div>
        </li>
            )
          })
        }
      </ul>
    </ManagerStyled>
  );
};

export default Manager;
