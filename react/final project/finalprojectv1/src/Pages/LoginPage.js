import { useState } from "react";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="container">
      <h1 className="text-center pb-3">Login</h1>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatInput"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label className="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-5">
        <input
          type="password"
          className="form-control"
          id="floatInput"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
      </div>
      <div className="form-row pb-3">
        <button className="col btn btn-outline-danger col-md-6">Cancel</button>
        <button className="col btn btn-outline-info col-md-6">
          <i class="bi bi-eraser-fill"></i>
        </button>
      </div>
      <div>
        <button className="btn btn-info col-md-12">Submit</button>
      </div>
    </div>
  );
}

export default LoginPage;
