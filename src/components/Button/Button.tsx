import { ReactNode } from 'react';
import './Button.css'

interface IProps {
    children: ReactNode,
    parentMethod: () => void,
}

export const ChildrenButton: React.FC<{children: ReactNode}> = ({children}) => {
    return(<>{children}</>)
}

export const Button = ({ children, parentMethod } : IProps) => {
    return (
        <button className='custom-button' onClick={ parentMethod }>
            { children }
        </button>
    )
}
