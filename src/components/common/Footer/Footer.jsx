import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <p className="footer__header-title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__header-divider" />
      </div>
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/arbuznik" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li>
            <a className="footer__link" href="https://www.facebook.com/nikita.arbyzov" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
        <p className="footer__copyright">{`© ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;