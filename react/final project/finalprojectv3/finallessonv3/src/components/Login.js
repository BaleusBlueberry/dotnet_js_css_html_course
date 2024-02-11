import { useState } from "react";
import { loginUser } from "../servises/userServises";

const Login = () => {
  const [formData, setFormatData] = useState({
    email: "ellvis@email.com",
    password: "Abc!123Abc",
  });

  const [error, setError] = useState();

  const handleInputChange = (e) => {
    setFormatData((previusFormData) => ({
      ...previusFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submited");

    const response = await loginUser(formData.email, formData.password);
    console.log(response);
    if (!response.success) {
      setError(response.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Username"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
