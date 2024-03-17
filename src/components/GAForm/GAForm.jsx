import './GAForm.css';
import { useState } from "react";

function Switch({state, setState, labelTrue, labelFalse}) {
    return (
        <>
            <div className="switch-wrapper">
                <label htmlFor="switch">{labelTrue}</label>
                <div className="switch-button" style={{backgroundColor: state ? "#0060df" : "white"}}>
                    <input type="checkbox" id="switch" name="switch" checked={state} onChange={() => setState((val) => !val)}/>
                    <label htmlFor="switch" className="switch-dot"/>
                </div>
                <label htmlFor="switch">{labelFalse}</label>
            </div>
        </>
    );
}

export default function GAForm({conditionList}) {
    const [startDate, setStartDate] = useState(new Date());
    const [payYearly, setPayYearly] = useState(true);
    const [firstClass, setFirstClass] = useState(false);
    const [conditions, setConditions] = useState(undefined);

    return (
        <form className="ga-wrapper">
            <label htmlFor="startDate">Gültig ab</label>
            <input required name="startDate" id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

            <Switch state={payYearly} setState={setPayYearly} labelFalse="Monatlich" labelTrue="Jährlich"/>
            
            {/* <label htmlFor="yearlyPayment">Jährliche Zahlung</label>
            <input required name="payment" id="yearlyPayment" type="radio" checked={payYearly} onClick={(e) => setPayYearly(true)}/>
            
            <label htmlFor="monthlyPayment">Monatliche Zahlung</label>
            <input required name="payment" id="monthlyPayment" type="radio" checked={!payYearly} onClick={(e) => setPayYearly(false)}/> */}

            <label htmlFor="firstClass">Erste Klasse</label>
            <input required name="class" id="firstClass" type="radio" checked={firstClass} onClick={(e) => setFirstClass(true)}/>

            <label htmlFor="secondClass">Zweite Klasse</label>
            <input required name="class" id="secondClass" type="radio" checked={!firstClass} onClick={(e) => setFirstClass(false)}/>

            <select id="conditions" name="conditions" className='ga-conditions' required value={conditions}>
                <option disabled>Bitte Auswählen</option>
                {conditionList.map((v) => {return (
                    <option value={v} key={v} onClick={() => setConditions(v)}>{v}</option>
                )})}
            </select>
        </form>
    );
}