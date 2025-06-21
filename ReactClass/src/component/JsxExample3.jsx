import './JsxExample.css';

function JsxExample3(){
    let num=11;
    return(
        <>
        {
            (num>0)?(
                <h2 class="a">This is a positive number.</h2>
            ):(
                <h2 class="b">This is a negative number.</h2>
            )
        }
        </>
    )
}
export default JsxExample3;
