function Exs1() {
  return (
    <div className="container">
      <h1>Exsursize 1</h1>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="inputFirstName">
              First Name
            </label>
            <input
              type="text"
              id="inputFirstName"
              className="form-control"
            ></input>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="inputLastName">
              Last Name
            </label>
            <input
              type="text"
              id="inputLastName"
              className="form-control"
            ></input>
          </div>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputUsername">
            Username
          </label>
          <input
            type="text"
            id="inputUsername"
            className="form-control"
          ></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputPassword">
            Password
          </label>
          <input
            type="Password"
            id="inputPassword"
            className="form-control"
          ></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputEmail">
            Email
          </label>
          <input type="Email" id="inputEmail" className="form-control"></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputAddress1">
            Address 1
          </label>
          <input
            type="text"
            id="inputAddress1"
            className="form-control"
          ></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputAddress2">
            Address 2
          </label>
          <input
            type="text"
            id="inputAddress1"
            className="form-control"
          ></input>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label" htmlFor="inputCountry">
              Country
            </label>
            <select className="form-select" id="inputCountry">
              <option value="Israel">Israel</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label" htmlFor="inputState">
              State
            </label>
            <select
              className="form-select"
              id="inputState"
              defaultValue="State"
            >
              <option value="State">State</option>
              <option value="Ohayo">Ohayo</option>
              <option value="Texas">Texas</option>
              <option value="Mitchigen">Mitchigen</option>
              <option value="New York">New York</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label" htmlFor="inputZip">
              Zip
            </label>
            <input type="Number" id="inputZip" className="form-control"></input>
          </div>
        </div>
        <hr />
        <h2>Payment:</h2>
        <div className="row">
          <h3 className="col-md-2">Methods:</h3>
          <div className="form-check col-md-1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="inputMethods"
            ></input>
            <label className="form-check-label" htmlFor="inputMethods">
              Credit
            </label>
          </div>
          <div className="form-check col-md-1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="inputMethods"
            ></input>
            <label className="form-check-label" htmlFor="inputMethods">
              cash
            </label>
          </div>
          <div className="form-check col-md-1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="inputMethods"
            ></input>
            <label className="form-check-label" htmlFor="inputMethods">
              paypal
            </label>
          </div>
        </div>
        <hr />
        <div className="row">
          <label className="form-label" htmlFor="inputCreditCardNumber">
            credit card number
          </label>
          <input
            type="text"
            id="inputCreditCardNumber"
            className="form-control"
          ></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputNameOnCard">
            name on card
          </label>
          <input
            type="text"
            id="inputNameOnCard"
            className="form-control"
          ></input>
        </div>
        <div className="row">
          <label className="form-label" htmlFor="inputCCV">
            CCV
          </label>
          <input type="number" id="inputCCV" className="form-control"></input>
        </div>
        <div className="row">
          <h2 className="col-md-2">exp date:</h2>
          <div className="col-md-2">
            <label className="form-label" htmlFor="inputMonth">
              MONTH |
            </label>
            <select className="form-select" id="inputMonth">
              <option value="Israel">JAN</option>
              <option value="USA">FEB</option>
              <option value="Russia">OCT</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label" htmlFor="inputYEAR">
              YEAR
            </label>
            <select className="form-select" id="inputYEAR">
              <option value="Israel">2023</option>
              <option value="USA">2024</option>
              <option value="Russia">2025</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Exs1;
