import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product:Product,
    onChange?: (args:onChangeArgs) => void,
    value?:number,
    initialValues?:InitialValues
}

const useProduct = ({onChange, product, value = 0, initialValues}:useProductArgs) => {

    const [counter, setCounter] = useState(0)

    const isMounted = useRef(false)

    const increaseBy = (value:number) => {

        let newValue = Math.max(counter + value, 0)

        if (initialValues?.maxCount){

            newValue = Math.min(initialValues.maxCount, newValue)
        }
        
        setCounter(newValue)

        onChange && onChange({count:newValue,product})
    }

    const reset = () => setCounter( initialValues?.count || value)

    useEffect(()=>{
        if ( !isMounted.current ) return;
        setCounter(value)
    },[value])

    useEffect(()=>{
        isMounted.current = true
    },[])
     
    return {counter, 
            isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
            maxCount:initialValues?.maxCount,

            increaseBy,
            reset
        }
}

export default useProduct