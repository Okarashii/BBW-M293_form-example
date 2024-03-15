import './Flash.css'

export default function Flash() {
    return (
        <div className='flash-wrapper'>
            <input className='flash-input' type="radio" id="flashOn" name="flash"/>
            <label className='flash-label' htmlFor="flashOn">Blitz ein</label>
            <input className='flash-input' type="radio" id="flashOff" name="flash"/>
            <label className='flash-label' htmlFor="flashOff">Blitz aus</label>
        </div>
    )
}