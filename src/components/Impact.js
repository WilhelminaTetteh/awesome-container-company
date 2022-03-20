import React from "react";
import bullet from "../images/bullet-vector.svg";
import logo from "../images/logo.svg";

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

const table = [
  {
    key: 1,
    content: logo,
    cclass: "impact__table-logo",
    tclass: "impact__table-cell"
  },  
  {
    key: 2,
    content: "Awesome Container Company",
    cclass: "impact__table-text",
    tclass: "impact__table-cell impact__table-highlight"
  },
  {
    key: 3,
    content: "Deliver Zero",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 4,
    content: "Logistics Company",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 5,
    content: "Washing Facility",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 6,
    content: "Single-use plastics",
    cclass: "impact__table-text",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 7,
    content: "Save over 50% on supply costs",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 8,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell impact__table-highlight"
  },
  {
    key: 9,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 10,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 11,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 12,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 13,
    content: "Save real estate storage costs",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 14,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell impact__table-highlight"
  },
  {
    key: 15,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell"
  },
  {
    key: 16,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 17,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 18,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
]
const tableContent = (content, cclass) => {
  if (cclass === "impact__table-logo") {
    return (
      <img src={content} alt="Awesome Container Company logo" className={cclass} />
    )
  } else if (cclass === "impact__table-dot") {
    return (
      <div className={cclass} />
    )
  } else if (cclass === "impact__table-text") {
    return (
      <p className={cclass}>{content}</p>
    )
  }
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
          {table.map(({key, content, cclass, tclass}) => {
            return (
              <div key={key} className={tclass}>
                {tableContent(content, cclass)}
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Impact;