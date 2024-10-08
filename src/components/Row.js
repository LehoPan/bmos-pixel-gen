import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";

export default function Row(props) {
    const {changeIndex, rowNum, width, height, selectedColor, toggleClick, click} = props;

    let pixels = [];

    for(let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} changeIndex = {changeIndex} row = {rowNum} column = {i} width={width} height={height} selectedColor={selectedColor} toggleClick={toggleClick} click={click} />)
    }


    return <div className="row">{pixels}</div>;
}
