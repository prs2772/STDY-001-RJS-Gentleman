import './Button.css'

interface IProps {
    label: string,
    parentMethod: () => void,
}

export const Button = ({label, parentMethod} : IProps) => {
    return (
        <button className='custom-button' onClick={parentMethod}>
            {label}
        </button>
    )
}
