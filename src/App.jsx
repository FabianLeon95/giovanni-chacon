import "./App.css";

const App = () => {
  return (
    <div className="bg-main">
      <div className="container pt-5">
      <div className="card shadow">
        <div className="card-body text-center">
          <h1 className="display-1 text-custom">
            <span className="fw-bold">Giovanni</span> Chacón
          </h1>
          <h2 className="h1 fw-light">
            Private transportation service for tourists in Costa Rica
          </h2>
          <div className="pt-4" style={{
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <a className="btn btn-lg btn-success mb-3 w-100" href="https://api.whatsapp.com/send/?phone=50688202318&text&type=phone_number&app_absent=0">
              <i className="bi bi-whatsapp me-2"></i>
              +506 8820 2318
            </a>
            <a className="btn btn-lg btn-custom w-100" href="mailto:eduardchacon2020@gmail.com">
              <i className="bi bi-envelope-at-fill me-2"></i>
              eduardchacon2020@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
