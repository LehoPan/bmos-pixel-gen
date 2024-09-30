import React, {createContext, useContext, useState} from "react";
import "../styles/pixel.scss";


export default function Pixel(props) {
    const {changeIndex, row, column, selectedColor} = props;

    const [pixelColor, setPixelColor] = useState("#03a9f4");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    changeIndex(row, column, pixelColor);

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
    onDragOver={applyColor}
    onMouseEnter={changeColorOnHover} 
    onMouseLeave={resetColor} 
    style={{backgroundColor: pixelColor}}></div>);
}