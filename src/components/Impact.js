import React from "react";
import { cards, table } from "../constants/constants";

const tableContent = (content, cclass) => {
  if (cclass === "impact__table-logo") {
    return (
      <img src={content} alt="Awesome Container Company logo" className={cclass} />
    )
  } else if (cclass.search("impact__table-dot") > -1) {
    return (
      <div className={cclass} />
    )
  } else if (cclass.search("impact__table-text") > -1) {
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
                      <div className="impact__card-bullet" />
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