import { DashboardStyled } from "./style";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="box-image">
        <img src="/images/isis.jpg" alt="" />
      </div>
      <div className="container">
        <div className="header">
          <img src="/icons/concha-1.png" alt="" />
          <h1>1° ano da Isis</h1>
          <img src="/icons/concha-2.png" alt="" />
        </div>
        <ul>
          <li>
            <img src="/icons/calender.png" alt="" />
            20/07/2025
          </li>
          <li>
            <img src="/icons/clock.png" alt="" />
            15:00h
          </li>
          <li id="locate">
            <img src="/icons/locate.png" alt="" />
            <a href="https://maps.app.goo.gl/yCTweCV5fT6DQpFg7" target="_blank">Cerimonial Vereda Elesbão Alexandre, 288 - Nossa Sra. da Conceição, 29176-526 </a>
          </li>
        </ul>
        <div className="alga">
          <img src="/icons/alga.png" alt="" />
          <img src="/icons/alga.png" alt="" />
          <img src="/icons/alga.png" alt="" />
          <img src="/icons/alga.png" alt="" />
          <img src="/icons/alga.png" alt="" />
        </div>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
