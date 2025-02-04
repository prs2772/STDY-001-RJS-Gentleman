// Used for/when:
// Allows us to create a mutable reference that persists along the lifecycle of the component withouit cause a render
// Reference a DOM element
// Don't triggers a re render but modifies the current value of the reference

import { useRef, useState } from "react"

interface IBookProps {
    bookPages?: number;
    currentPage?: number;
}

export const BookReader = ({ bookPages = 100, currentPage = 1 }: IBookProps) => {
    const currentPageRef = useRef<number>(currentPage);
    const [currentPageHook, setCurrentPageHook] = useState<number>(currentPage);

    const nextPage = () => {
        if(currentPageRef.current < bookPages) {
            console.log(`You have advanced to page ${++currentPageRef.current}`);
        } else {
            console.log(`You are on the last page (${currentPageRef.current})!`);
        }
    }

    const previousPage = () => {
        if(currentPageRef.current > 1) {
            console.log(`You have gone back to page ${--currentPageRef.current}`);
        } else {
            console.log(`You are on the first page (${currentPageRef.current})!`);
        }
    }

    const goToPage = (page: number) => {
        let message: string = page < 1 || page > bookPages ? 'Invalid page number!' : 
        currentPageRef.current === page ? 'You already are on this page!' : '';
        if(message === '') {
            message = `You have gone to page ${page}`;
            currentPageRef.current = page;
            setCurrentPageHook(page);
        }
        console.log(message);
    }

    return(
        <div>
            <h2>Book reading</h2>
            <p>You are on page: {currentPageRef.current}</p>
            <p>You are on page (useState value): {currentPageHook}</p>
            <button onClick={nextPage}>Next page</button>
            <button onClick={previousPage}>Previous page</button>
            <button onClick={() => goToPage(30)}>Go to page 30</button>
        </div>
    )
}
