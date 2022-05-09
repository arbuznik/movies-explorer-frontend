import './Techs.css';
import Section from '../../../common/Section/Section';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';

const Techs = () => {
  return (
    <Section color={"grey"} id={"techs"}>
      <SectionHeader title="Технологии" />
      <div className="techs__content">
        <article className="techs__article">
          <h3 className="techs__article-title">7 технологий</h3>
          <p className="techs__article-paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
        <ul className="techs-list">
          <li className="techs-list__item">HTML</li>
          <li className="techs-list__item">CSS</li>
          <li className="techs-list__item">JS</li>
          <li className="techs-list__item">React</li>
          <li className="techs-list__item">Git</li>
          <li className="techs-list__item">Express.js</li>
          <li className="techs-list__item">mongoDB</li>
        </ul>
      </div>
    </Section>
  );
};

export default Techs;