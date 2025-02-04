import { useRef } from "react";

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleButtonClick = () => {
        if(!inputRef.current) {
            console.log("No input element reference found");
            return;
        }
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write down smth" />
            <button onClick={handleButtonClick}>Focus input</button>
        </div>
    )
}
