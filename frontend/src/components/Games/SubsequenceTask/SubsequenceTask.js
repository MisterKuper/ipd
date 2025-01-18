import './SubsequenceTask.css';
import React, { useState } from 'react';

const SubsequenceTask = ({ images, correctOrder, onComplete }) => {
  const [order, setOrder] = useState([null, null, null, null]);

  const handleCardClick = (index, image) => {
    const newOrder = [...order];
    newOrder[index] = image;
    setOrder(newOrder);
  };

  const handleSubmit = () => {
    if (JSON.stringify(order) === JSON.stringify(correctOrder)) {
      onComplete();
    } else {
      alert('Incorrect order, try again!');
    }
  };

  return (
    <div>
      <p>Arrange the images in the correct order</p>
      <div className="image-grid">
        {order.map((item, index) => (
          <div key={index} className="empty-slot" onClick={() => handleCardClick(index, images[index])}>
            {item && <img src={item.src} alt={item.name} />}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default SubsequenceTask;
