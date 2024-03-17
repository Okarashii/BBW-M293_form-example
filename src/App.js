import "./App.css";
import { useState } from "react";

function DebugButton({log}) {
    function debug(output) {
        for(const [label, value] of output) {
            console.log(`${label}:`, value);
        }
    }

    return (
        <button className="debug-button" onClick={() => debug(log)}>Debug Output</button>
    )
}

// Aufgabe 1a
function Flash() {
    const [flash, setFlash] = useState(false);

    return (
        <>
            <div className="flash-wrapper">
                <input type="radio" id="flash-on" name="flash" checked={flash} onChange={() => setFlash((f) => !f)}/>
                <label htmlFor="flash-on">
                    Blitz ein
                </label>
                <input type="radio" id="flash-off" name="flash" checked={!flash} onChange={() => setFlash((f) => !f)}/>
                <label htmlFor="flash-off">
                    Blitz aus
                </label>

            </div>
            <DebugButton log={[["Flash", flash]]}/>
        </>
    );
}

// Aufgabe 1.1a
function CheckBoxes() {
    const [extraCheese, setExtraCheese] = useState(false);
    const [extraOnions, setExtraOnions] = useState(false);

    return (
        <>
            <div className="checkboxes-wrapper">
                <input id="cb-cheese" type="checkbox" checked={extraCheese} onChange={() => setExtraCheese((c) => !c)}/>
                <label htmlFor="cb-cheese">Extra Käse</label>

                <input id="cb-onions" type="checkbox" checked={extraOnions} onChange={() => setExtraOnions((o) => !o)}/>
                <label htmlFor="cb-onions">Extra Zwiebeln</label>
            </div>
            <DebugButton log={[["Extra Cheese", extraCheese],["Extra Onions", extraOnions]]}/>
        </>
    );
}

// Aufgabe 1.2a
function ScreenOrientation() {
    const [orientation, setOrientation] = useState("landscape");

    const handleClick = () => {
        setOrientation((val) => val === "landscape" ? "portrait" : "landscape");
    }

    return (
        <>
            <div className="switch-wrapper">
                <label htmlFor="landscape">Landscape</label>
                <span className="switch" style={{backgroundColor: orientation === "landscape" ? "#0060df" : "transparent"}}>
                    <input type="radio" id="landscape" name="screenOrientation" checked={orientation === "landscape"} onChange={handleClick}/>
                    <input type="radio" id="portrait" name="screenOrientation" checked={orientation === "portrait"} onChange={handleClick}/>
                </span>
                <label htmlFor="portrait">Portrait</label>
            </div>
            <DebugButton log={[["Screen Orientation", orientation]]}/>
        </>
    );
}

function App() {
    return (
        <div className="app">
            <h3 className="app-title">Aufgabe 1</h3>
            <Flash />

            <h3 className="app-title">Aufgabe 1.1</h3>
            <CheckBoxes />

            <h3 className="app-title">Aufgabe 1.2</h3>
            <ScreenOrientation/>
        </div>
    );
}

export default App;
