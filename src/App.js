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
        <div className="flash-wrapper">
            <input type="radio" id="flash-on" name="flash" checked={flash} onChange={() => setFlash((f) => !f)}/>
            <label htmlFor="flash-on">
                Blitz ein
            </label>
            <input type="radio" id="flash-off" name="flash" checked={!flash} onChange={() => setFlash((f) => !f)}/>
            <label htmlFor="flash-off">
                Blitz aus
            </label>

            <DebugButton log={[["Flash", flash]]}/>
        </div>
    );
}

// Aufgabe 1.1a
function CheckBoxes() {
    const [extraCheese, setExtraCheese] = useState(false);
    const [extraOnions, setExtraOnions] = useState(false);

    return (
        <div className="checkboxes-wrapper">
            <input id="cb-cheese" type="checkbox" checked={extraCheese} onChange={() => setExtraCheese((c) => !c)}/>
            <label htmlFor="cb-cheese">Extra Käse</label>

            <input id="cb-onions" type="checkbox" checked={extraOnions} onChange={() => setExtraOnions((o) => !o)}/>
            <label htmlFor="cb-onions">Extra Zwiebeln</label>

            <DebugButton log={[["Extra Cheese", extraCheese],["Extra Onions", extraOnions]]}/>
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <h3 className="app-title">Aufgabe 1</h3>
            <Flash />

            <h3 className="app-title">Aufgabe 2</h3>
            <CheckBoxes />
        </div>
    );
}

export default App;
