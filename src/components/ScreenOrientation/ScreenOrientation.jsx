import './ScreenOrientation.css';

// Aufgabe 1.2a
export default function ScreenOrientation({isLandscape, setIsLandscape}) {
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