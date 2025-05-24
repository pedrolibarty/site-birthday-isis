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
            02/07/2025
          </li>
          <li>
            <img src="/icons/clock.png" alt="" />
            20:00h
          </li>
          <li>
            <img src="/icons/locate.png" alt="" />
            Rua Cinco, n° 323, Chigago - 35047-005
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
