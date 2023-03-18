import React from "react";
import PigCard from "./PigCard";

function Piglist ({hogs}) {

    const handleAllHogs = () => {
        return hogs.map((hog)=> {
            return (
               <PigCard key={hog.name} hog={hog}/>
                )
        })

    }

    return (
        //classNam="pigTile"
        <ul>
            {handleAllHogs()}
        </ul>
    )


    
}

export default Piglist;