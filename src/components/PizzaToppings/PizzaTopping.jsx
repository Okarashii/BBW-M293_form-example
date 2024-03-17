import './PizzaToppings.css';

// Aufgabe 1.1a
export default function PizzaToppings({ extraCheese, setExtraCheese, extraOnions, setExtraOnions}) {
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