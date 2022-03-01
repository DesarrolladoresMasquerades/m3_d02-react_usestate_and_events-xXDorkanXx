import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0) // same destructuring as const {input, name} = req.body;
    //const [myObject, setMyObject] = useState({drink: "cappuccino"})
    //const [dayOfWeek, setDayOfWeek] = useState("Monday")
    //const [holiday, setHoliday] = useState(true)
    function addOne(){
        setCounter(counter + 1)
    }
    
    function deleteOne(){
        setCounter(counter - 1)
    }

    return(
        <div className="Counter">
            <p>You have a total of: <span>{counter}</span></p>
            <button onClick={addOne}>Add 1</button>
            <button onClick={deleteOne}>Substract 1</button>
        </div>
    )
}