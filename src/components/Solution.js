import React from "react";
import { cardList } from "../constants/constants";
import image1 from "../images/solution1.png";
import image2 from "../images/solution2.png";
import image3 from "../images/solution3.png";
 
const Solution = () => {
  const [selectedCard, setSelectedCard] = React.useState(cardList[0]);

  const nextCard = (e) => {
    e.preventDefault();

    if (e.target.className === "solution__button") {
      if (selectedCard.key === 1) {
        setSelectedCard(cardList[2]);
        return;
      } 
      setSelectedCard(cardList[selectedCard.key - 2]);
    } else {
      if (selectedCard.key === 3) {
        setSelectedCard(cardList[0])
        return;
      }
      setSelectedCard(cardList[selectedCard.key]);
    }
  }

  return (
    <section className="solution" id="solution">
      <h2 className="solution__header">Sustainability Delivered</h2>
      <p className="solution__text"><span className="solution__text-span">Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</p>

      <div className="solution__carousel">
        {/* {window.innerWidth > 767 && <button className="solution__button" onClick={nextCard} />} */}

        <div className="solution__card">
          <img src={selectedCard.image} alt="" className="solution__card-image" />
          <article className="solution__card-text">
            <h3 className="solution__card-header">Features</h3>
            <ul className="solution__card-list">
              {selectedCard.features.map((card, i) => {
                return <li className="solution__card-item" key={i}>{card}</li>
              })}
            </ul>
            <h3 className="solution__card-header">Sizing</h3>
            <ul className="solution__card-list">
            {selectedCard.sizing.map((card, i) => {
                return <li className="solution__card-item" key={i}>{card}</li>
              })}
            </ul>
          </article>
        </div>

        {/* {window.innerWidth > 767 && <button className="solution__button solution__button_isRight" onClick={nextCard} />} */}
      </div>

      <div className="solution__visual">
        
        <p className="solution__visual-text solution__visual-text_1">
          <img src={image1} alt="container stick person holding 5 other containers" className="solution__visual-image solution__visual-image_1" />
          Backend logistics support
        </p>
        <p className="solution__visual-text solution__visual-text_2">
          <img src={image2} alt="#" className="solution__visual-image solution__visual-image_2" />
          Save at least 50% on supply cost and time on inventory tracking/re-orders
        </p>
        <p className="solution__visual-text solution__visual-text_3">
          <img src={image3} alt="#" className="solution__visual-image solution__visual-image_3" />
          Save storage space while removing tons of waste from our oceans and landfills
        </p>
      </div>
    </section>
  );
}

export default Solution;
