import './PuzzleTask.css';
import React, { useState } from 'react';

const PuzzleTask = ({ image, onComplete }) => {
//   const [pieces, setPieces] = useState(generateShuffledPieces(image));

//   const handlePieceClick = (index) => {
//     // Перемещаем кусочек в пустую ячейку
//   };

//   const handleSubmit = () => {
//     if (isPuzzleSolved(pieces)) {
//       onComplete();
//     } else {
//       alert('Incorrect, try again!');
//     }
//   };

  return (
    <div>
      {/* <p>Solve the puzzle</p>
      <div className="puzzle">
        {pieces.map((piece, index) => (
          <div key={index} onClick={() => handlePieceClick(index)}>
            <img src={piece.src} alt={`Piece ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Confirm</button> */}
    </div>
  );
};

export default PuzzleTask;