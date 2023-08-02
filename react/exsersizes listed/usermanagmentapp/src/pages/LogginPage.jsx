import React, { useState } from "react";

function LogginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1@mail.com",
      password: "pass1",
    },
    {
      username: "user2@mail.com",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    // console.log(Document.forms[0]);
    var { uname, pass } = document.forms[0];
    console.log(uname, pass);

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputEmail">
            User Email:
          </label>
          <input
            defaultValue={database[0].username}
            type="email"
            name="uname"
            id="inputEmail"
            className="form-control"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password{" "}
          </label>
          <input
            defaultValue={database[0].password}
            type="password"
            name="pass"
            id="inputPassword"
            className="form-control"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="container">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default LogginPage;
