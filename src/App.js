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

    const gaConditionList = [
        "Erwachsene 25-64/65 Jahre",
        "Senior ab 64/65 Jahre",
        "Junior 16-25 Jahre",
        "Junior Studierende 25-30 Jahre",
        "Reisende mit Behinderung",
        "Kind 6-16 Jahre",
        "Duo Partner",
        "Familia Kind 6-16 Jahre",
        "Familia Jugend 16-25 Jahre",
        "Familia Partner"
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

                <GAForm conditionList={gaConditionList}/>
            </div>
        </>
    );
}

export default App;
