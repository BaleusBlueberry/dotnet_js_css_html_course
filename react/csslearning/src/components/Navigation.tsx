function Navigation() {
  return (
    <header>
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://picsum.photos/id/237/30/30"
              alt="my dog logo"
              className="me-2 rounded"
            ></img>
            My Doggy site
          </a>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Dogs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Greets</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Gender</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">A dog</a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navigation;
