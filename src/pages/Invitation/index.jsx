import { useContext, useState } from "react";
import { InvitationStyled } from "./styles";
import { GuestContext } from "../../contexts/GuestContext";
import toast from "react-hot-toast";

const Invitation = () => {
  const { guests, setGuests, updateGuest } = useContext(GuestContext);
  const [filterSend, setFilterSend] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  const copy = (id_guest) => {
    const texto = `
    🎉 A nossa pequena Ísis vai fazer 1 aninho! 🥳
    Queremos muito celebrar esse momento especial com você!
    Clique no link abaixo para confirmar presença e ver todos os detalhes:
    https://site-birthday-isis.vercel.app/guest/${id_guest}

    Esperamos você! 💖
    Favor confirmar até dia 30 de junho!
    `;

    navigator.clipboard
      .writeText(texto)
      .then(
        toast("Convite copiado!", {
          duration: 4000,
          position: "top-right",
          icon: "🦀",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        })
      )
      .catch((err) => {
        toast("Ocorreu um erro!", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
      });
  };

  const guestFiltered = guests.filter((g) => {
    const matchStatus =
      filterSend === "yes"
        ? g.ind_env === true
        : filterSend === "no"
        ? g.ind_env === false
        : true;

    const matchName = g.name
      .toLowerCase()
      .includes(nameFilter.trim().toLowerCase());

    return matchStatus && matchName;
  });

  const confirm = (id, ind) => {
    const updated = guests.map((g) =>
      g.id_guest === id ? { ...g, ind_env: !g.ind_env } : g
    );
    setGuests(updated);
    updateGuest(id, !ind);
  };

  return (
    <InvitationStyled>
      <div className="filter-buttons">
        <button
          onClick={() => setFilterSend("all")}
          className={filterSend === "all" ? "active" : ""}
        >
          Todos
        </button>
        <button
          onClick={() => setFilterSend("yes")}
          className={filterSend === "yes" ? "active" : ""}
        >
          Enviados
        </button>
        <button
          onClick={() => setFilterSend("no")}
          className={filterSend === "no" ? "active" : ""}
        >
          N/ Enviados
        </button>
      </div>

      <input
        type="text"
        placeholder="Filtrar por nome"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className="filter-input"
      />

      <ul className="convites">
        {guestFiltered.map((g) => {
          return (
            <li className="convite-line" key={g.id_guest}>
              <div className="container">
                <div className="content" onClick={() => copy(g.id_guest)}>
                  <h2>{g.name}</h2>
                </div>
                <div className="send">
                  <p>Enviado?</p>
                  <div
                    className={`box ${g.ind_env === true ? "send" : ""}`}
                    onClick={() => confirm(g.id_guest, g.ind_env)}
                  >
                    {g.ind_env === true && (
                      <img src="/icons/icon-yes.png" alt="" />
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </InvitationStyled>
  );
};

export default Invitation;
