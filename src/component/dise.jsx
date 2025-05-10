const Dise = (prop) => {
    return (
        <span 
        onClick={prop.hold}
        className={prop.isHeld ? "game-btn active" : "game-btn"}>
            {prop.value}
        </span>
    )
}


export default Dise;