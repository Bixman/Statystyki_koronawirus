import "../App.scss";

function Navbar(props) {
  function totalFilter(value) {
    if (value.country === "All") {
      return value.cases.total;
    }
  }

  const totalCases = props.apiStats
    .filter(totalFilter)
    .map(stat => stat.cases.total);

  return (
    <div className="navbar">
      <h1>Nazwa</h1>
      <p>Całkowita liczba przypadków: {totalCases}</p>
    </div>
  );
}

export default Navbar;
