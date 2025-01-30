import './Button.css'

interface IProps {
    label: string,
    parentMethod: () => void,
}

export const Button = ({label, parentMethod} : IProps) => {
    // useEffect(() => {
    //     console.log('Label cambió')
    // }, [label]);

    return (
        <button className='custom-button' onClick={parentMethod}>
            {label}
        </button>
    )
}
