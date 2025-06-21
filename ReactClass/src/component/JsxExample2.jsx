function JsxExample(){
    let num=11;
    if(num%2==0){
        return(
            <h2>The number {num} is an even number.</h2>
        )

    }else{
        return(
            <h2>The number {num} is an odd number.</h2>
        )
    }
}
export default JsxExample;
