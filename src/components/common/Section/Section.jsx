import './Section.css';

const Section = ({ children, color, id }) => {
  return (
    <section className="section" id={id}>
      <div className={`section__container section__container_color_${color}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;