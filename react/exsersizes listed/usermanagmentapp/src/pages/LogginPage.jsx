import { useState } from "react";

const renderForm = (
  <div className="container">
    <div className="shadow-lg p-3 bg-white rounded">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 inputcontainer">
          <label htmlFor="emailInput" className="form-label">
            User Email:
          </label>
          <input
            type="email"
            name="emailInput"
            className="form-control"
            required
          ></input>
          {renderErrorMessage("emailInput")}
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
          ></input>
          {renderErrorMessage("pass")}
        </div>
        <button className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
    </div>
  </div>
);
function handleSubmit(e) {
  e.preventDefault();
  console.log("forum was submitted");
}
function renderErrorMessage(name) {
  console.log(name, "render error triger");
}
// const renderErrorMessage = (name) =>
//   name === errorMassages.name && (
//     <div className="error">{errorMassages.message}</div>
//   );

function LogginPage() {
  const [errorMassages, setErrorMassages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState({});
  return renderForm;
}
export default LogginPage;
