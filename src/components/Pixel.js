import React, {createContext, useContext, useState} from "react";
import "../styles/pixel.scss";


export default function Pixel(props) {
    const {changeIndex, row, column, width, height, selectedColor} = props;

    const [pixelColor, setPixelColor] = useState("#03a9f4");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    changeIndex(row, column, pixelColor);
    
    let number = "";

    if(row === 0 || row === height - 1) {
        if(column >= width/2){
            number = width - column;
        } else {
            number = column + 1;
        }
    } else if(column === 0 || column === width - 1) {
        if(row >= height/2){
            number = height - row;
        } else {
            number = row + 1;
        }
    }

    function applyColor() { 
        changeIndex(row, column, selectedColor);
        setPixelColor(selectedColor);
        setCanChangeColor(false);
    }

    function changeColorOnHover() {
        setOldColor(pixelColor);
        setPixelColor(selectedColor);
    }

    function resetColor() {
        if(canChangeColor) {
            setPixelColor(oldColor);
        }
        setCanChangeColor(true);
    }

    return (<div className="pixel" 
    onClick={applyColor}  
    onMouseEnter={changeColorOnHover} 
    onMouseLeave={resetColor} 
    style={{backgroundColor: pixelColor}}>{number}</div>);
}