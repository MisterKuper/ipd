import './PairedPicturesTask.css';
import React, { useState, useEffect } from 'react';

const PairedPicturesTask = ({ images, onComplete }) => {
  const [flipped, setFlipped] = useState(Array(images.length).fill(false));
  const [selected, setSelected] = useState([]);
  const [pairsFound, setPairsFound] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(Array(images.length).fill(false)); // После нескольких секунд переворачиваем все карточки
    }, 2000);

    return () => clearTimeout(timer);
  }, [images]);

  const handleClick = (index) => {
    if (selected.length === 2) return;
    setSelected([...selected, index]);
    setFlipped((prev) => prev.map((flip, i) => (i === index ? true : flip)));
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (images[selected[0]].id === images[selected[1]].id) {
        setPairsFound([...pairsFound, selected]);
        setSelected([]);
      } else {
        setTimeout(() => {
          setFlipped((prev) =>
            prev.map((flip, i) => (selected.includes(i) ? false : flip))
          );
          setSelected([]);
        }, 1000);
      }
    }
  }, [selected, images, pairsFound]);

  const handleSubmit = () => {
    if (pairsFound.length === images.length / 2) {
      onComplete();
    }
  };

  return (
    <div>
      <p>Find all pairs</p>
      <div className="paired-pictures">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`card ${flipped[index] ? 'flipped' : ''}`}
          >
            <img src={flipped[index] ? image.src : '/back.png'} alt={image.name} />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default PairedPicturesTask;