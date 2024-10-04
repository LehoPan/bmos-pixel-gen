import React, {useMemo} from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";

export default function DrawingPanel(props) {
    const {width, height, selectedColor, toggleClick, click} = props;


    const backingArray = Array(height)
        .fill()
        .map((_, indexW) =>
            Array(width)
                .fill()
                .map((_, indexH) => indexH));

    let rows = [];

    for(let i = 0; i < height; i++) {
        rows.push(<Row key={i} changeIndex={changeIndex} rowNum={i} width={width} height={height} selectedColor={selectedColor} toggleClick={toggleClick} click={click}/>)
    }

    function changeIndex(row, column, color) {
        backingArray[row][column] = color;
    }

    function exportText() {

        let frameString = "";
        for(let i = 0; i < height; i++) {
            for(let j = 0; j < width; j++) {
                let value = backingArray[i][j];
                if(value === "#000000") {
                    frameString += i + "," + j + ",0|";
                }
            }
        }
        console.log(frameString);
    }

    return (
    <div id="drawingPanel">
        <div id="pixels">
            {rows}
        </div>
        <button onClick={() => exportText()} className="button">
            Export Text
        </button>
    </div>);
}
