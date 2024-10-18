import { useState } from "react"

export default function Team(){
    const [team,setTeam] =useState(11)

    const handleAdd=()=>{
        const newTeam=team+1 
        setTeam(newTeam)
    }

    const handleAdd2=()=>{
        const newTeam=team-1 
        setTeam(newTeam)
    }

    const teamStyle ={
        border:'2px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'15px'
    }

    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>Remove</button>

        </div>
    )
}