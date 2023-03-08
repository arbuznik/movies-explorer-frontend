import './AboutProject.css';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import Section from '../../../common/Section/Section';

const AboutProject = () => {
  return (
    <Section id="about-project">
        <SectionHeader title="Movies-explorer" />
        <div className="about-project__content">
          <article className="about-project__article">
            <h3 className="about-project__article-title">Please register or login to continue.</h3>
            <p className="about-project__article-paragraph"><a href="https://arbuznik.com/projects/movie-explorer">Read more</a> about this project.</p>
          </article>
        </div>
    </Section>
  );
};

export default AboutProject;