import { useState } from 'react'

function useCount() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prev => prev + 1)
    }
    const restartCount = () => {
        setCount(prev => prev - 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return { count, addCount, restartCount, resetCount }
}
export default useCount;