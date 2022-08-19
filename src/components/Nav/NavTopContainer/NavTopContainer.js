import './NavTopContainer.scss';

function NavTopContainer() {
  return (
    <div className="NavTopContainer">
      <div className="carousel">
        <div className="leftCover">
          <i className="fa-solid fa-chevron-left leftArrow" />
        </div>
        <div className="rightCover">
          <i className="fa-solid fa-chevron-right rightArrow" />
        </div>
        <div className="slider">
          <section className="list">content for section 1</section>
          <section className="list">content for section 2</section>
          <section className="list">content for section 3</section>
          <section className="list">content for section 4</section>
          <sectionn className="list">content for section 5</sectionn>
        </div>
        <div className="controls">
          <span className="arrow prev">1</span>
          <span className="arrow next">1</span>
        </div>
      </div>
    </div>
  );
}

export default NavTopContainer;
