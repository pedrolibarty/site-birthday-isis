import { useContext, useEffect } from "react";
import { ManagerStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";
import Invitation from "../Invitation";
import Companion from "../Companion";
import { useState } from "react";
import Form from "../Form";
import Loading from "../Loading";

const Manager = () => {
  const { getGuests, getAllCompanions, allCompanions, loading } =
    useContext(GuestContext);
  const [list, setList] = useState("convite");

  useEffect(() => {
    getGuests();
    getAllCompanions();
  }, []);

  return loading ? (<Loading />) : (
    <ManagerStyled>
      <ul className="status">
        <li>
          <h3>Todos</h3>
          <div className="row">{allCompanions.length}</div>
        </li>
        <li>
          <h3>Confirmados</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>
            {allCompanions.filter((c) => c.status).length}
          </div>
        </li>
        <li>
          <h3>Recusados</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status === false).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>{" "}
            {allCompanions.filter((c) => c.status === false).length}
          </div>
        </li>
        <li>
          <h3>Sem resposta</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status === null).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>{" "}
            {allCompanions.filter((c) => c.status === null).length}
          </div>
        </li>
      </ul>
      <div className="main-btn">
        <button
          className={list === "convite" ? "active" : ""}
          onClick={() => setList("convite")}
        >
          Convites
        </button>
        <button
          className={list === "convidado" ? "active" : ""}
          onClick={() => setList("convidado")}
        >
          Convidados
        </button>
        <button
          className={list === "criar" ? "active" : ""}
          onClick={() => setList("criar")}
        >
          Adicionar convidado
        </button>
      </div>
      <h3 className="title">
        {list === "convite"
          ? "Lista de convites"
          : list === "convidado"
          ? "Lista de presença"
          : "Criação de convites"}
      </h3>
      {list === "convite" ? (
        <Invitation />
      ) : list === "convidado" ? (
        <Companion />
      ) : (
        <Form />
      )}
    </ManagerStyled>
  );
};

export default Manager;
