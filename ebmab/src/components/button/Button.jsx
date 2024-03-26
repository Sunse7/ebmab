import './style.scss';

export function Button({text, handleClick}) {
    return (
        <button className='button' onClick={handleClick}>{text}</button>
    )
}