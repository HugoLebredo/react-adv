import { useState } from "react"

const useProduct = () => {

    const [counter, setCounter] = useState(0)
    
    const increaseBy = (value:number) => setCounter(Math.max(counter + value, 0))
    
    return {counter, increaseBy}
}
 export default useProduct