import './AboutProject.css';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import Section from '../../../common/Section/Section';

const AboutProject = () => {
  return (
    <Section id="about-project">
        <SectionHeader title="О проекте" />
        <div className="about-project__content">
          <article className="about-project__article">
            <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__article-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className="about-project__article">
            <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__article-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className="about-project__progress">
          <div className="about-project__progress-section">
            <p className="about-project__progress-weeks about-project__progress-weeks_type_green">1 неделя</p>
            <p className="about-project__caption">Back-end</p>
          </div>
          <div className="about-project__progress-section">
            <p className="about-project__progress-weeks about-project__progress-weeks_type_grey">4 недели</p>
            <p className="about-project__caption">Front-end</p>
          </div>
        </div>
    </Section>
  );
};

export default AboutProject;