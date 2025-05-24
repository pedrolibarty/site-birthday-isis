import Dashboard from "../Dashboard";
import List from "../List";
import { MainStyled } from "./style";

const Main = () => {
  return (
    <MainStyled>
      <Dashboard />
      <List />
    </MainStyled>
  );
};

export default Main;
