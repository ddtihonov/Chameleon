import React from "react";
import image_0 from '../../image/puzzle-piece-0.png'
import image_1 from '../../image/puzzle-piece-1.png'

export default function DragList(props) {
    const { puzzleElement, handleDrag } = props;

return (
    <li key={puzzleElement.id} className="listItem">
        {puzzleElement && (
        <img
            src={`./${puzzleElement.elementSrc}`}
            draggable
            onDrag={(evt) => handleDrag(evt, puzzleElement)}
        />
    )}
    </li>
);
}
