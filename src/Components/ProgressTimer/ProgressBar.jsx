import React from "react";


export default function ProgressBar({timer}){
    const [progressTimer, setProgressTimer] = React.useState(timer)

    React.useEffect(() => {
       const timer = setInterval(() => {
            setProgressTimer((prevProgressTimer) => prevProgressTimer - 10)
       }, 10)

       return () => {
            clearInterval(timer)        
       }
    }, [])

    return(
        <progress value={progressTimer} max={timer} className=" h-3 bg-red-500 rounded" />
    )
}