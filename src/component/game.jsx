import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"
import Dise from "./dise";

const Game = () => {
    
    const generateDiseNum = () =>  {
        return new Array(10)
        .fill(0)
        .map(() => ({
            value : Math.ceil(Math.random() * 6),
            isHeld : false,
            id : nanoid()
        }))
    }
        
    const [ dise, setDise ] = useState(generateDiseNum())
    
    const wonGame = dise.every(die => die.isHeld) && dise.every(die => die.value === dise[0].value);
    const buttonRef = useRef(null);
    useEffect(() => {
       if(wonGame){
            buttonRef.current.focus();
            buttonRef.current.classList.add("focus:border-2")
       }
    }, [wonGame])


    const rollDise = () => {
        if(!wonGame) {
            setDise(oldDise => {
                return oldDise.map(dise => (
                    dise.isHeld ? 
                    dise :
                    {...dise, value : Math.ceil(Math.random() * 6)}
                ))
            })
        } else {
            setDise(generateDiseNum())
        }
    }

    const hold = (id) => {
        setDise(oldDise => {
            return oldDise.map(dise => (
                dise.id === id ?
                {...dise , isHeld : !dise.isHeld} :
                dise
            ))
        })
    }

    const diseElement = dise.map(die => 
        <Dise 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        hold = {() => hold(die.id)}
        />
    )

    const score = dise.reduce((total, die) => total + die.value, 0);
    

    return (
        <>
        {wonGame && <Confetti width={innerWidth} height={innerHeight}/>}
        <div className="num-game">
            <div className="container text-center">
                {diseElement}
            </div>

            <div className="container text-center my-5">
            <button 
            ref={buttonRef}
            onClick={rollDise}
            className="border-b-2 border-indigo-300 uppercase font-bold px-4 hover:border-indigo-500 ">
                {wonGame ? "New Game" : "Roll Game"}
            </button>
            </div>

            <div className="container text-center my-5">
            {wonGame && <p className="text-green-500 font-bold">You Won!</p>}
            <p>Your Score is :{score}</p>
            </div>
        </div>
        </>
    )
}

export default Game;