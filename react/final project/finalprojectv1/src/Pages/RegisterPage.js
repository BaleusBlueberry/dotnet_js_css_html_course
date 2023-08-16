import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RegisterPage() {
  const navigated = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imageUrl: "",
    imageAlt: "",
    state: "",
    couontry: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    business: "",
  });
  return (
    <div className="container">
      <h1 className="text-center pb-3">Register</h1>
      <div className="form-group">
        {/*first name and lastname group */}
        <div className="row mb-3">
          <div className="form-floating col">
            <input
              type="text"
              className="form-control"
              id="floatInput"
              placeholder="Firstname"
              value={user.first}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <label className="floatingInput">Firstname</label>
          </div>
          <div className="form-floating col">
            <input
              type="text"
              className="form-control"
              id="floatInput"
              placeholder="MiddleName"
              value={user.middleName}
              onChange={(e) => setUser({ ...user, middleName: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              MiddleName
            </label>
          </div>
        </div>
        {/*end of first and lastname */}

        <div className="form-row pb-3">
          <button className="btn btn-outline-danger col-md-6">Cancel</button>
          <button className="btn btn-outline-info col-md-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bootstrap-reboot"
              viewBox="0 0 16 16"
            >
              <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
              <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
            </svg>
          </button>
        </div>
        <div>
          <button className="btn btn-info col-md-12">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
