import { useEffect, useState } from "react";

function ChangeBG() {
    let colors = ['red', 'blue', 'yellow', 'orange', 'violet', 'purple', 'pink', 'aqua'];
    const [bg, setBG] = useState('white')
    const setBackground = () => {
        const randomIndex = math.floor(math.random() * colors.length);
        const randomcolor = colors[randomIndex];
        setBG(randomcolor);
    }
    useEffect(() => {
        document.body.style.background = bg
    }, [bg])
    return (
        <button onClick={setBackground}>Change Background</button>
    )
}
export default ChangeBG;
