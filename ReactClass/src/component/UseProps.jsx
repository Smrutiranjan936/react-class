function UseProps(props){
    console.log(props);
    return(
        <>
            <h2>My name is {props.name}.</h2>
            <h2>Email:{props.email}</h2>
            <h2>I am {props.age} Years old.</h2>
        </>
    )
}
export default UseProps;
