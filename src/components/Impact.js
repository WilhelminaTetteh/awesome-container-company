import React from "react";
import bullet from "../images/bullet-vector.svg";

const cards = [
  {
    key: 1,
    decoration: "impact__bars",
    header: "For Businesses",
    text: [
      "Save at least 50% on supply cost",
      "Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking",
      "Save real estate cost for storage",
      "Government helps Subsidize Up to 70%"
    ]
  },
  {
    key: 2,
    decoration: "impact__circles",
    header: "For Users",
    text: [
      "Remove all chemicals going into food: plastics, BPA, PFAS and other ‘forever chemicals’ used to hold compostable packaging together",
      "Gamification: reward for returned containers",
      "Sustainability sells: users feel good about helping the planet"
    ]
  }
]

const table = {

}

const Impact = () => {
  return (
    <section className="impact" id="impact">
      <h2 className="impact__header">Impact</h2>
      <div className="impact__cards">
        {cards.map(({key, decoration, header, text}) => {
          return (
            <article key={key} className="impact__card">
              <div className={decoration} />
              <h3 className="impact__card-header">{header}</h3>
              <ul className="impact__card-list">
                {text.map((line) => {
                  return (
                    <li key={line} className="impact__list-item">
                      <img className="impact__card-bullet" src={bullet} />
                      <p className="impact__card-text">{line}</p>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
      <div className="impact__competition">
        <h2 className="impact__header">The competition is no match</h2>
        <article className="impact__table">

        </article>
      </div>
    </section>
  )
}

export default Impact;