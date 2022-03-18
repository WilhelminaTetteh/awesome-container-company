import React from "react";
import card1 from "../images/card1.png";

const cardList = {
  "features": [
  [
    "Removable/adjustable divider",
    "Leak-resistant lid keeps food fresh",
    "Rectangle shapes stack to save storage space",
    "Easy to sanitize and dishwasher safe",
    "Containers and lids are freezer safe",
    "Containers are oven safe up to 300 degrees",
    "Lighter and sturdier than glass",
    "Etched tare weights for easy bulk shopping",
    "304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider",
    "Free of BPA, BPS, phthalates and lead",
  ],
  [
    "Leak-resistant lid keeps food fresh",
    "Easy to sanitize and dishwasher safe",
    "Containers and lids are freezer safe",
    "Containers are oven safe up to 300 degrees",
    "Three containers nest to save storage space",
    "Lighter and sturdier than glass",
    "Etched tare weights for easy bulk shopping",
    "304 (18/8) stainless steel, LDPE #4 plastic",
    "Free of BPA, BPS, phthalates and lead",
  ],
  [
    "Removable 2-section + 4-section divider",
    "Leak-resistant lid keeps food fresh",
    "Easy to sanitize and dishwasher safe",
    "Containers and lids are freezer safe",
    "Containers are oven safe up to 300 degrees",
    "Lighter and sturdier than glass",
    "Etched tare weights for easy bulk shopping",
    "304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider",
    "Free of BPA, BPS, phthalates and lead",
  ]
],
  "sizing": [
    [
      "25oz container size with lid on: 7.75” x 1.75” x 5” Lids: 7.75” x 5”"
    ],
    [
      "16oz, container size with lid on: 4-5/8” x 2.25”. Lid is 4.75” diameter",
      "9oz, container size with lid on: 4” x 2”. Lid is 4” diameter",
      "5oz, container size with lid on: 3.5” x 1.5”. Lid is 3.5” diameter",
    ],
    [
      "100oz (3 liters, 12.5 cups), 9.5” x 3.25”",
    ],
  ]
}
 
const Solution = () => {
  return (
    <section className="solution" id="solution">
      <h2 className="solution__header">Sustainability Delivered</h2>
      <p className="solution__text"><span className="solution__text-span">Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</p>
      <div className="solution__carousel">
        <button className="solution__button" />
        <div className="solution__card">
          <img src={card1} className="solution__card-image" alt="" />
          <div className="solution__card-text">
            <h3 className="solution__card-header">Features</h3>
            <ul className="solution__card-list">
              {cardList.features[0].map((card) => {
                return <li className="solution__card-item">{card}</li>
              })}
            </ul>
            <h3 className="solution__card-header">Sizing</h3>
            <ul className="solution__card-list">
            {cardList.sizing[0].map((card) => {
                return <li className="solution__card-item">{card}</li>
              })}
            </ul>
          </div>
        </div>
        <button className="solution__button solution__button_isRight" />
      </div>
    </section>
  );
}

export default Solution;