import React from "react";
import card1 from "../images/card1.png";
import image1 from "../images/solution1.png";
import image2 from "../images/solution2.png";
import image3 from "../images/solution3.png";

const cardList = [
  {
    key: 1,
    image: image1,
    features: [
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
    sizing: [
      "25oz container size with lid on: 7.75” x 1.75” x 5” Lids: 7.75” x 5”",
    ]
  },
  {
    key: 2,
    image: image2,
    features: [
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
    sizing: [
      "16oz, container size with lid on: 4-5/8” x 2.25”. Lid is 4.75” diameter",
      "9oz, container size with lid on: 4” x 2”. Lid is 4” diameter",
      "5oz, container size with lid on: 3.5” x 1.5”. Lid is 3.5” diameter",
    ]
  },
  {
    key: 3,
    image: image3,
    features: [
      "Removable 2-section + 4-section divider",
      "Leak-resistant lid keeps food fresh",
      "Easy to sanitize and dishwasher safe",
      "Containers and lids are freezer safe",
      "Containers are oven safe up to 300 degrees",
      "Lighter and sturdier than glass",
      "Etched tare weights for easy bulk shopping",
      "304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider",
      "Free of BPA, BPS, phthalates and lead",
    ],
    sizing: [
      "100oz (3 liters, 12.5 cups), 9.5” x 3.25”",
    ]
  }
];

 
const Solution = () => {
  const [selectedCard, setSelectedCard] = React.useState(cardList[0]);

  const nextCard = (e) => {
    e.preventDefault();
    console.log(e.target.className);

    if (e.target.className === "solution__button") {
      console.log("Left button was pressed")
    } else {
      console.log("Right button was pressed")
    }
  }

  return (
    <section className="solution" id="solution">
      <h2 className="solution__header">Sustainability Delivered</h2>
      <p className="solution__text"><span className="solution__text-span">Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</p>
      <div className="solution__carousel">
        <button className="solution__button" onClick={nextCard} />
        <div className="solution__card">
          <img src={card1} alt="" className="solution__card-image" />
          <article className="solution__card-text">
            <h3 className="solution__card-header">Features</h3>
            <ul className="solution__card-list">
              {selectedCard.features.map((card) => {
                return <li className="solution__card-item" key={card}>{card}</li>
              })}
            </ul>
            <h3 className="solution__card-header">Sizing</h3>
            <ul className="solution__card-list">
            {selectedCard.sizing.map((card) => {
                return <li className="solution__card-item" key={card}>{card}</li>
              })}
            </ul>
          </article>
        </div>
        <button className="solution__button solution__button_isRight" onClick={nextCard} />
      </div>
      <div className="solution__visual">
        <img src={image1} alt="container stick person holding 5 other containers" className="solution__visual-image solution__visual-image_1" />
        <p className="solution__visual-text solution__visual-text_1">Backend logistics support</p>
        <img src={image2} alt="#" className="solution__visual-image solution__visual-image_2" />
        <p className="solution__visual-text solution__visual-text_2">Save at least 50% on supply cost and time on inventory tracking/re-orders</p>
        <img src={image3} alt="#" className="solution__visual-image solution__visual-image_3" />
        <p className="solution__visual-text solution__visual-text_3">Save storage space while removing tons of waste from our oceans and landfills</p>
      </div>
    </section>
  );
}

export default Solution;
