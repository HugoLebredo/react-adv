import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product:Product,
    onChange?: (args:onChangeArgs) => void
    value?:number
}

const useProduct = ({onChange, product, value = 0}:useProductArgs) => {

    const [counter, setCounter] = useState(0)

    const isControled = useRef( !!onChange )

    const increaseBy = (value:number) => {

        if(isControled.current) {
            return onChange!({ count: value, product})
        }
    
        const newValue = Math.max(counter + value, 0)
        
        setCounter(newValue)

        onChange && onChange({count:newValue,product})
    }

    useEffect(()=>{
        setCounter(value)
    },[value])

    return {counter, increaseBy}
}

export default useProduct