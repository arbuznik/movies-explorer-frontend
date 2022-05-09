import './Section.css';

const Section = ({ children, color, id }) => {
  return (
    <section className={`section section_color_${color}`} id={id}>
      <div className="section__container">
        {children}
      </div>
    </section>
  );
};

export default Section;