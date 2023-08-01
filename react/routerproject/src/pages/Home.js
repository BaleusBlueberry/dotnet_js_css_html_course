function Home() {
  return (
    <section className="section">
      <h2>Home</h2>
      <Link to="about" className="btn">
        About
      </Link>
      <br />
      <Link to="products" className="btn">
        Products
      </Link>
    </section>
  );
}

export default Home;
