import { useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import List from "../List";
import { MainStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const Main = () => {
  const { getCompanions, loading } = useContext(GuestContext);
  const { id_guest } = useParams();

  useEffect(() => {
    getCompanions(id_guest);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <MainStyled>
      <Dashboard />
      <List />
    </MainStyled>
  );
};

export default Main;
