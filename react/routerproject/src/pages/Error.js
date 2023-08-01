import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="section">
      <h2>Error 404</h2>
      <p>This page dose not exsists</p>
      <Link to="/">back</Link>
    </section>
  );
}

export default Error;
