import { useEffect, useState } from "react";
function UseEffect() {
    const [click, setClick] = useState(0)
    useEffect(() => {
        document.title = You Clicked For ${click} Times;
    })
    return (
        <>
            <p>You Clicked For{click} Times</p>
            <button onClick={() => setClick(click + 1)}>Click Me</button>
        </>
    )
}
export default UseEffect;
