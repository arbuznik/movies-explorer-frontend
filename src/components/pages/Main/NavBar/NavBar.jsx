import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-bar__links">
        <a href="#about-project" className="nav-bar__link">О проекте</a>
        <a href="#techs" className="nav-bar__link">Технологии</a>
        <a href="#about-me" className="nav-bar__link">Студент</a>
      </nav>
    </div>
  );
};

export default NavBar;