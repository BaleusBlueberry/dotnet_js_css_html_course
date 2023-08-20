import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RegisterPage() {
  const navigated = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
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
        <div className="row mb-3 form-group">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatInput"
                placeholder="Firstname"
                value={user.first}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              <label className="floatingInput">Firstname</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatInput"
                placeholder="LastName"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              ></input>
              <label htmlFor="inputPassword" className="form-label">
                LastName
              </label>
            </div>
          </div>
        </div>

        {/*end of first and lastname */}

        <div className="row mb-3 form-group">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatInput"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label className="floatingInput">Firstname</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatInput"
                placeholder="Phone Number"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              ></input>
              <label htmlFor="inputPassword" className="form-label">
                Phone Number
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3 form-group">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatInput"
              placeholder="LastName"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatInput"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
          </div>
        </div>
        <div className="form-row pb-3 mt-5">
          <button className="btn btn-outline-danger col-6">Cancel</button>
          <button className="btn btn-outline-info col-6">
            <i class="bi bi-eraser-fill"></i>
          </button>
        </div>
        <div className="form-group">
          <button className="btn btn-info">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
