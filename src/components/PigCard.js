import React, {useState} from "react";

function PigCard({hog}) {

    const[toggleClick, setToggleClick]=useState(false)

    function handleClick() {
        console.log("click")
        setToggleClick((toggleClick)=>!toggleClick)
    }
    
    function additionalStuff () {
        if (toggleClick===true){
            return(
            <>
            <p>{hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Not Greased"}</p>
            <p>{hog["highest medal achieved"]}</p>
            </>
            )
        } else {
            return null
        }
    }

    
    
    return (
        <li className="pigTile" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} className="minPigTile"/>
            {additionalStuff()}
        </li>
    )




}


export default PigCard;