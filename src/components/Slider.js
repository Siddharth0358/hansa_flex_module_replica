import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttons = [
    "X-CODE self-adhesive label",
    "X-CODE Tip Tag with cable tie",
    "X- CODE stainless steel cable tie",
    "X-CODE cable tie with RFID chip",
    "X-CODE shrink hose",
  ];

  const descriptions = [
    "This contains the X-CODE also in the form of a QR code and can be augmented with customer-specific material numbers and other information. The integrated labelling of the hose line in accordance with DIN 20066 does away with the usual embossing of the fitting. The protective laminate is suitable for high temperatures up to 240 °C.",
    "The distinctive yellow-black Tip Tag marker on black cable ties has been the traditional method of attachment for the X-CODE since 2004. The marker can be removed and attached to the replacement component in the branch. Also available with QR code.",
    "The X-CODE VA cable is manufactured in SS316 stainless steel and is suitable for use in extreme temperatures of -80 °C to +538 °C. Its areas of use include high-temperature applications and the food industry. The code is applied by laser engraving.",
    "The X-CODE cable tie with RFID chip can be read automatically using a scanner or an app. This is useful in avoiding transcription errors in difficult to access installation situations where there are many hose lines.",
    "For hose lines used in areas where particularly good corrosion protection for fittings is required, the X-CODE can also be attached using a shrink hose. The X-CODE shrink hose is a highly flexible, temperature resistant and flame-suppressant polyolefin heat shrink hose.",
  ];

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
  ];

  const updateSlider = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="button-group">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`js-text-slider-button ${currentIndex === index ? 'is-selected' : ''}`}
              onClick={() => updateSlider(index)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="description">
          <p className={`c-text-slider__text ${currentIndex === 0 ? 'is-selected' : ''}`}>
            {descriptions[0]}
          </p>
          <p className={`c-text-slider__text ${currentIndex === 1 ? 'is-selected' : ''}`}>
            {descriptions[1]}
          </p>
          <p className={`c-text-slider__text ${currentIndex === 2 ? 'is-selected' : ''}`}>
            {descriptions[2]}
          </p>
          <p className={`c-text-slider__text ${currentIndex === 3 ? 'is-selected' : ''}`}>
            {descriptions[3]}
          </p>
          <p className={`c-text-slider__text ${currentIndex === 4 ? 'is-selected' : ''}`}>
            {descriptions[4]}
          </p>
        </div>
        <div className="arrow-left" onClick={() => updateSlider((currentIndex - 1 + buttons.length) % buttons.length)}></div>
        <div className="arrow-right" onClick={() => updateSlider((currentIndex + 1) % buttons.length)}></div>
      </div>
      <div className="right-section">
        {images.map((image, index) => (
          <img
            key={index}
            src={require(`../assets/${image}`)}
            alt={buttons[index]}
            className={`slider-image ${currentIndex === index ? 'is-selected' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
