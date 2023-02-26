import "./dashboard.css";
const dashboard = () => {
  return (
    <section className="Box">
      <div className="Dash-Header">
        <h1>Dashboard</h1>
      </div>

      <div className="Dash-Messages"></div>

      <div className="Dash-Analytics"></div>

      <div className="Dash-Graph"></div>
    </section>
  );
};

export default dashboard;
