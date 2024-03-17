import "./App.css";
import { useState } from "react";

// Aufgabe 1a
function Flash({flash, setFlash}) {
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
        </>
    );
}

// Aufgabe 1.1a
function PizzaToppings({ extraCheese, setExtraCheese, extraOnions, setExtraOnions}) {
    return (
        <>
            <div className="checkboxes-wrapper">
                <input id="cb-cheese" type="checkbox" checked={extraCheese} onChange={() => setExtraCheese((c) => !c)}/>
                <label htmlFor="cb-cheese">Extra Käse</label>

                <input id="cb-onions" type="checkbox" checked={extraOnions} onChange={() => setExtraOnions((o) => !o)}/>
                <label htmlFor="cb-onions">Extra Zwiebeln</label>
            </div>
        </>
    );
}

// Aufgabe 1.2a
function ScreenOrientation({isLandscape, setIsLandscape}) {
    return (
        <>
            <div className="switch-wrapper">
                <label htmlFor="orientation">Landscape</label>
                <div className="switch-button" style={{backgroundColor: isLandscape ? "#0060df" : "white"}}>
                    <input type="checkbox" id="orientation" name="orientation" checked={isLandscape} onChange={() => setIsLandscape((val) => !val)}/>
                    <label htmlFor="orientation" className="switch-dot"/>
                </div>
                <label htmlFor="orientation">Portrait</label>
            </div>
        </>
    );
}

function App() {
    // Den Components werden diese States als props übergeben, sodass 'App' zugriff auf deren Werte hat.
    const [flash, setFlash] = useState(false);
    const [extraCheese, setExtraCheese] = useState(false);
    const [extraOnions, setExtraOnions] = useState(false);
    const [isLandscape, setIsLandscape] = useState(true);

    const onSubmit = (event) => {
        // Sobald der Submit-Button geklickt wird, werden die States der einzelnen components hier verarbeitet.
        console.log("Flash: ", flash);
        console.log("Extra Cheese: ", extraCheese);
        console.log("Extra Onions: ", extraOnions);
        console.log("Orientation: ", isLandscape);
    }

    return (
        <form onSubmit={onSubmit} className="app">
            <h3 className="app-title">Aufgabe 1</h3>
            <Flash flash={flash} setFlash={setFlash}/>

            <h3 className="app-title">Aufgabe 1.1</h3>
            <PizzaToppings extraCheese={extraCheese} extraOnions={extraOnions} setExtraCheese={setExtraCheese} setExtraOnions={setExtraOnions}/>

            <h3 className="app-title">Aufgabe 1.2</h3>
            <ScreenOrientation isLandscape={isLandscape} setIsLandscape={setIsLandscape}/>

            <button className="submit-button" type="submit">Absenden</button>
        </form>
    );
}

export default App;
