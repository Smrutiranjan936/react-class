function UserMapping({ users}) {
    return (
        <>
        <h2>All Users Data</h2>
        <table width={'100%'}  border={1} cellPadding={0} cellSpacing={0}
        style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>S1 no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
{
                
                    users.map((value,index)=>{
                        return (
                            <tr key={value.id}>
                                <td>{index +1}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.age}</td>
                                <td>{value.phone}</td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
        </>
        
    )

}
export default UserMapping;
