import './Flash.css';

// Aufgabe 1a
export default function Flash({flash, setFlash}) {
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