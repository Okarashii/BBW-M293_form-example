import "./App.css";
import { useState } from "react";
import Flash from './components/Flash/Flash.jsx';
import PizzaToppings from './components/PizzaToppings/PizzaTopping.jsx';
import ScreenOrientation from './components/ScreenOrientation/ScreenOrientation.jsx';
import GAForm from "./components/GAForm/GAForm.jsx";

function App() {
    // Den Components werden diese States als props übergeben, sodass 'App' zugriff auf deren Werte hat.
    const [flash, setFlash] = useState(false);
    const [extraCheese, setExtraCheese] = useState(false);
    const [extraOnions, setExtraOnions] = useState(false);
    const [isLandscape, setIsLandscape] = useState(true);

    const gaPriceTable = [
        {label: "Erwachsene 25-64/65 Jahre",        priceMonthly1: 545, priceMonthly2: 340, priceYearly1: 6300, priceYearly2: 2860},
        {label: "Senior ab 64/65 Jahre",            priceMonthly1: 430, priceMonthly2: 240, priceYearly1: 4840, priceYearly2: 2880},
        {label: "Junior 16-25 Jahre",               priceMonthly1: 405, priceMonthly2: 245, priceYearly1: 4520, priceYearly2: 2650},
        {label: "Junior Studierende 25-30 Jahre",   priceMonthly1: 405, priceMonthly2: 245, priceYearly1: 4520, priceYearly2: 2650},
        {label: "Reisende mit Behinderung",         priceMonthly1: 355, priceMonthly2: 225, priceYearly1: 4050, priceYearly2: 2480},
        {label: "Kind 6-16 Jahre",                  priceMonthly1: 250, priceMonthly2: 160, priceYearly1: 2760, priceYearly2: 1645},
        {label: "Duo Partner",                      priceMonthly1: 380, priceMonthly2: 245, priceYearly1: 4340, priceYearly2: 2700},
        {label: "Familia Kind 6-16 Jahre",          priceMonthly1: 250, priceMonthly2: 75,  priceYearly1: 2760, priceYearly2: 680},
        {label: "Familia Jugend 16-25 Jahre",       priceMonthly1: 255, priceMonthly2: 95,  priceYearly1: 2790, priceYearly2: 925},
        {label: "Familia Partner",                  priceMonthly1: 310, priceMonthly2: 200, priceYearly1: 3520, priceYearly2: 2180},
    ];

    const onSubmit = (event) => {
        // Sobald der Submit-Button geklickt wird, werden die States der einzelnen components hier verarbeitet.
        console.log("Flash: ", flash);
        console.log("Extra Cheese: ", extraCheese);
        console.log("Extra Onions: ", extraOnions);
        console.log("Orientation: ", isLandscape);
    }

    return (
        <>
            <div className="app">
                <form onSubmit={onSubmit} className="app">
                    <h3 className="app-title">Aufgabe 1</h3>
                    <Flash flash={flash} setFlash={setFlash}/>

                    <h3 className="app-title">Aufgabe 1.1</h3>
                    <PizzaToppings extraCheese={extraCheese} extraOnions={extraOnions} setExtraCheese={setExtraCheese} setExtraOnions={setExtraOnions}/>

                    <h3 className="app-title">Aufgabe 1.2</h3>
                    <ScreenOrientation isLandscape={isLandscape} setIsLandscape={setIsLandscape}/>

                    <button className="submit-button" type="submit">Absenden</button>
                </form>

                <hr style={{width: '100%'}}/>

                <GAForm priceTable={gaPriceTable}/>
            </div>
        </>
    );
}

export default App;
