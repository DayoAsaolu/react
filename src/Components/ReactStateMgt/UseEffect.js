import { useEffect, useState } from "react";

function StopWatch() {
    const [ time, setTime ] = useState(0)

    useEffect( () =>
        { const interval = setInterval( () => {
            setTime((t) => {
                return t+1
            })
        }, 1000)
        return () => clearInterval(interval)
        }, [])

    return (
        <div>
            time: {time}
        </div>
    )
}


function UseEffect() {

    return (
        <div>
            <h3>UseEffect</h3>
            <StopWatch/>

        </div>
    )
}

export default UseEffect