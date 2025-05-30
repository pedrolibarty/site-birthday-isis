import { ErrorStyled } from "./style";

const Error = () => {
  return (
    <ErrorStyled>
      <h3>Ocorreu um Erro!</h3>
      <p>
        Não foi possível encontrar essa página, entre em contato com anfitriã da
        festa!
      </p>
    </ErrorStyled>
  );
};

export default Error;
