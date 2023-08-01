import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container">
      <div className="text-center d-grid mx-auto">
        <h1 className="title">Error 040</h1>
        <h2 className="subtitle">This page dose not exist</h2>
        <Link type="button" class="btn btn-secondary" to="/">
          Return to Login page
        </Link>
      </div>
    </div>
  );
}

export default Error;
