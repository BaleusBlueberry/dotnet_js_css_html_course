function Card({ name, email, phone, facebook, github, linkedin }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <ul>
          <li>
            <a href={`mailto:${email}`} alt="email link">
              {email}
            </a>
          </li>
          <li>
            <a href={`tel:${phone}`} alt="phone link">
              {phone}
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${phone}`} alt="phone whatupp">
              Send me a whatupp
            </a>
          </li>
          <li>
            <a href={facebook} alt="email link">
              Facebook
            </a>
          </li>
          <li>
            <a href={github} alt="github link">
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
