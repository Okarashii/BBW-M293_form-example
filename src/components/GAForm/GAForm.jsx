import './GAForm.css';
import { useState, useEffect } from "react";

function Switch({name, state, setState, labelTrue, labelFalse}) {
    return (
        <>
            <div className="switch-wrapper">
                <label htmlFor={name}>{labelTrue}</label>
                <div className="switch-button" style={{backgroundColor: state ? "#0060df" : "white"}}>
                    <input type="checkbox" id={name} name={name} checked={state} onChange={() => setState((val) => !val)}/>
                    <label htmlFor={name} className="switch-dot"/>
                </div>
                <label htmlFor={name}>{labelFalse}</label>
            </div>
        </>
    );
}

export default function GAForm({priceTable}) {
    const [startDate, setStartDate] = useState(new Date());
    const [payYearly, setPayYearly] = useState(true);
    const [firstClass, setFirstClass] = useState(false);
    const [conditions, setConditions] = useState(undefined);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        document.getElementById("startDate").valueAsDate = startDate;
    }, []);

    useEffect(() => {
        if (conditions) {
            const { priceMonthly1, priceMonthly2, priceYearly1, priceYearly2} = priceTable.filter(({label}) => label === conditions)[0];

            if (payYearly && firstClass) setPrice(priceYearly1);
            else if (payYearly && !firstClass) setPrice(priceYearly2);
            else if (!payYearly && firstClass) setPrice(priceMonthly1);
            else setPrice(priceMonthly2);
        }
        else {
            setPrice(0);
        }
    }, [payYearly, firstClass, conditions, priceTable]);

    return (
        <>
            <form className="ga-wrapper">
                <select id="conditions" name="conditions" className='ga-conditions' required>
                    <option selected disabled>Bitte Auswählen</option>
                    {priceTable.map(({label}) => {return (
                        <option value={label} key={label} onClick={() => setConditions(label)}>{label}</option>
                    )})}
                </select>

                <Switch name="class" state={firstClass} setState={setFirstClass} labelFalse="Zweite Klasse" labelTrue="Erste Klasse"/>

                <Switch name="payment" state={payYearly} setState={setPayYearly} labelFalse="Monatlich" labelTrue="Jährlich"/>

                <label htmlFor="startDate">Gültig ab</label>
                <input required name="startDate" id="startDate" type="date" onChange={(e) => setStartDate(new Date(e.target.value))}/>
            </form>
            <div>
                {price > 0 ? <p>Sie bezahlen CHF {price.toFixed(2)} pro {payYearly ? "Jahr" : "Monat"}</p> : null}
                {startDate ? <p>Ihr GA ist ab dem {startDate.toDateString()} gültig</p> : null}
            </div>
        </>
    );
}