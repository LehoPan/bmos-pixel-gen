import React, {useState} from "react";
import "../styles/editor.scss";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import Row from "./Row";

export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(100);
    const [panelHeight, setPanelHeight] = useState(30);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setColor] = useState("#000000")

    function initializeDrawingPanel() {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "start drawing" ? setButtonText("reset") : setButtonText("start drawing");
    }

    function changeColor(color) {
        setColor(color.hex);
    }

    return <div id="editor">
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (<div id="options">
            <div className="option">
                <input 
                    type="number" 
                    className="panelInput" 
                    defaultValue={panelWidth} 
                    onChange={(e) => {setPanelWidth(e.target.value)}}
                />
                <span>Width</span>
            </div>
            <div className="option">
                <input 
                    type="number" 
                    className="panelInput" 
                    defaultValue={panelHeight} 
                    onChange={(e) => {setPanelHeight(e.target.value)}}
                />
                <span>Height</span>
            </div>
        </div>)}

        <button onClick={initializeDrawingPanel} className="button">
            {buttonText}
        </button>
        
        <div>
        {hideOptions && (
            <button style={{
                padding: '1rem',
                backgroundColor: '#000000',
                borderRadius: `1rem`,
            }}
            onClick={() => {setColor("#000000")}}
            >
            </button>
        )}

        {hideOptions && (
            <button style={{
                padding: '1rem',
                backgroundColor: '#03a9f4',
                borderRadius: `1rem`,
            }}
            onClick={() => {setColor("#03a9f4")}}
            >
            </button>
        )}
        </div>

        <br/>

        {hideOptions && 
            (<DrawingPanel 
                width={panelWidth}
                height={panelHeight}
                selectedColor={selectedColor}
            />
        )}
    </div>;
}