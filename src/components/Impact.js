import React from "react";
import bars from "../images/bars.png";
import circles from "../images/circles.png";

const Impact = () => {
  return (
    <section className="impact" id="impact">
      <h2 className="impact__header">Impact</h2>
      <div className="impact__cards">
        <img className="impact__bars" alt="bar chart decoration" src={bars} />
        <img className="impact__circles" alt="circles decoration" src={circles} />
        <div className="impact__card">
          <h3 className="impact__card-header"></h3>
        </div>
        <div className="impact__card">
          <h3 className="impact__card-header"></h3>
        </div>
      </div>
      <div className="impact__competition">
        <h2 className="impact__header">The competition is no match</h2>
      </div>
    </section>
  )
}

export default Impact;