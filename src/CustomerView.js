import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './slices/customerSlice';

function CustomerView() {

    const customers = useSelector((state) => state.customers)
    //select only the customers field from whole state data
    const dispatch = useDispatch();

    function deleteHandler(index){
        dispatch(deleteCustomer(index))
    }

    return (
        <div>
            <h3>View Customer</h3>
            <ul style={{listStyle:'none'}}>
                {customers.map(
                    (customer,index) => <li> {customer}
                    <button onClick={()=> deleteHandler(index)}>Delete</button></li>
                )}
            </ul>

        </div>
    )
}

export default CustomerView
