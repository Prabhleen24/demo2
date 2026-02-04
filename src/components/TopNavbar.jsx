function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-semibold">
        My Portfolio
      </span>

      <div className="ms-auto">
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#degree">My Degree</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavbar;
