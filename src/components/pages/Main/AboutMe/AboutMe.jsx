import './AboutMe.css';
import studentPhoto from '../../../../images/student-photo.jpg';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import Section from '../../../common/Section/Section';
import { Link } from 'react-router-dom';

const AboutProject = () => {
  return (
    <Section id="about-me">
      <SectionHeader title="Студент" />
      <div className="about-me__content">
        <article className="about-me__about">
          <img src={studentPhoto} alt="Student" className="about-me__photo" />
          <div className="about-me__description">
            <h3 className="about-me__title">Никита</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик</p>
            <p className="about-me__paragraph">Я родился и живу в Москве, закончил факультет экономики ГУУ.</p>
            <nav className="about-me__social">
              <a className="about-me__social-link" href="https://www.facebook.com/nikita.arbyzov" target="_blank" rel="noreferrer">Facebook</a>
              <a className="about-me__social-link" href="https://github.com/arbuznik" target="_blank" rel="noreferrer">Github</a>
            </nav>
          </div>
        </article>
        <div className="about-me__portfolio">
          <h4 className="about-me__portfolio-header">Портфолио</h4>
          <ul className="about-me__portfolio-links">
            <li className="about-me__portfolio-link-container">
              <Link className="about-me__portfolio-link" to="#">
                <p className="about-me__portfolio-link-text">Статичный сайт</p>
                <p className="about-me__portfolio-link-text">↗</p>
              </Link>
              <div className="about-me__portfolio-link-divider"/>
            </li>
            <li className="about-me__portfolio-link-container">
              <Link className="about-me__portfolio-link" to="#">
                <p className="about-me__portfolio-link-text">Адаптивный сайт</p>
                <p className="about-me__portfolio-link-text">↗</p>
              </Link>
              <div className="about-me__portfolio-link-divider"/>
            </li>
            <li className="about-me__portfolio-link-container">
              <Link className="about-me__portfolio-link" to="#">
                <p className="about-me__portfolio-link-text">Одностраничное приложение</p>
                <p className="about-me__portfolio-link-text">↗</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutProject;