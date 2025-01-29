import { useState } from 'react'
import './UseState.css'
import { Button } from '..'

export const UseState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Paris')
    const countMore = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <Button label={`Value: ${count}`} parentMethod={countMore} />
            <p>{name}</p>
            <Button label={`Change Name`} parentMethod={() => setName('a')} />
        </>
    )
}
