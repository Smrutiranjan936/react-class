function DtataMapping(){
    let arr=[10,20,30,40,50];
    return(
        <>
        {
            arr.map((value)=>{
                return(
                    <li>{value}</li>
                )
            })
        }
        </>
    )
}
export default DtataMapping
