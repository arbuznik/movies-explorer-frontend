import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <p className="footer__header-title">Project in collaboration with Yandex.Practicum x BeatFilm.</p>
        <div className="footer__header-divider" />
      </div>
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://practicum.com" target="_blank" rel="noreferrer">Yandex.Practicum</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/arbuznik" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
        <p className="footer__copyright">{`© 2022 - ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;