import './PairingTask.css';
import React, { useState } from 'react';

const PairingTask = ({ images, correctPairs, onComplete }) => {
  const [pairing, setPairing] = useState({});

  const handleDrop = (image, index) => {
    setPairing((prev) => ({ ...prev, [index]: image }));
  };

  const handleSubmit = () => {
    const isCorrect = Object.values(pairing).every((image, index) => correctPairs[index] === image);
    if (isCorrect) {
      onComplete();
    } else {
      alert('Incorrect pairs, try again!');
    }
  };

  return (
    <div>
      <p>Match the pairs</p>
      <div className="pairing">
        {images.map((image, index) => (
          <div key={index} className="image-slot" onDrop={() => handleDrop(image, index)}>
            {pairing[index] && <img src={pairing[index].src} alt={pairing[index].name} />}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default PairingTask;