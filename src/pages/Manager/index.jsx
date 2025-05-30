import { useContext, useEffect } from "react";
import { ManagerStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";

const Manager = () => {
  const { guests, getGuests } = useContext(GuestContext);

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <ManagerStyled>
      <ul className="status">
        <li>
          <h3>Todos</h3>
          <div className="row">100</div>
        </li>
        <li>
          <h3>Confirmados</h3>
          <div className="row">
            50% <div className="line"></div> 50
          </div>
        </li>
        <li>
          <h3>Recusados</h3>
          <div className="row">
            50% <div className="line"></div> 50
          </div>
        </li>
        <li>
          <h3>Sem resposta</h3>
          <div className="row">
            50% <div className="line"></div> 50
          </div>
        </li>
      </ul>

      <ul className="convites">
        <li className="convite-line">
          <div className="container">
            <div className="content">
              <h2>Pedro Gabriel</h2>
            </div>
            <div className="send">
              <p>Enviado?</p>
              <div className="box"></div>
            </div>
          </div>
        </li>
      </ul>
    </ManagerStyled>
  );
};

export default Manager;
