import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [companions, setCompanions] = useState([]);
  const [originCompanions, setOriginCompanions] = useState([]);
  const [allCompanions, setAllCompanions] = useState([]);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const api = "http://localhost:3000/api/";

  const getCompanions = async (id_guest) => {
    try {
      const res = await fetch(`${api}companion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_guest }),
      });

      const data = await res.json();

      if (data[0] === undefined) {
        navigate("/error");
        return;
      }

      setCompanions(data);
      setOriginCompanions(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const updateCompaion = async () => {
    const changed = companions.filter((comp) => {
      const origin = originCompanions.find((o) => o.id_comp === comp.id_comp);
      return origin && origin.status !== comp.status;
    });

    if (changed.length === 0) {
      toast("Presenças atualizadas!", {
        duration: 4000,
        position: "top-right",
        icon: "🦀",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    try {
      const res = await fetch(`${api}update/companion`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changed),
      });
      await res.json();

      toast("Presenças atualizadas!", {
        duration: 4000,
        position: "top-right",
        icon: "🦀",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    } catch (error) {
      toast("Ocorreu um erro!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
    }
  };

  const getGuests = async () => {
    try {
      const res = await fetch(`${api}guests`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro ao listar grupos", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      const data = await res.json();

      setGuests(data);
    } catch {
      toast("Erro ao listar grupos", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
    }
  };

  const getAllCompanions = async () => {
    try {
      const res = await fetch(`${api}all/companion`, {
        method: "GET"
      })

      if (!res.ok) {
        toast("Erro ao listar convidados", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
      }

      const data = await res.json();

      setAllCompanions(data);
    } catch {
      toast("Erro ao listar convidados", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
    }
  }

  return (
    <GuestContext.Provider
      value={{
        companions,
        getCompanions,
        setCompanions,
        updateCompaion,
        loading,
        guests,
        getGuests,
        allCompanions,
        getAllCompanions
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};
