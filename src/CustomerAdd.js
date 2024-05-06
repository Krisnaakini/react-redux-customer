import { useState } from 'react';
import CustomerView from './CustomerView';
import { addCustomer } from './slices/customerSlice';
import { useDispatch } from 'react-redux';

export default function CustomerAdd() {

    const [input, setInput] = useState("");
    // const [customer, setCustomer] = useState([]);   *no need when using redux action state*
    const dispatch = useDispatch();

    function inputCustomer(){
        if(input){
            // setCustomer((previousState) => [...previousState, input]) *no need when using redux action state*
            dispatch(addCustomer(input))
            setInput("");
        }
    }

    return (
        <div>
            <div>
                <h3>Add New Customer</h3>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={inputCustomer}>Add</button>
            </div>
        </div>
        
    )
}