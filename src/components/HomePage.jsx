import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Computer } from "./Computer";
 
export const HomePage = ()=>{
    console.log('BACKEND:::');
    console.log(process.env.REACT_APP_BACKEND); 
    
    const [val, setVal] = useState([]);

    const fetchComputers = async ()=>{
        const response = await axios.get(process.env.REACT_APP_BACKEND);
        setVal(response.data);
    }

    const onFormSubmit = async (e)=>{
        e.preventDefault();
        const payload = {
            manufacturer: e.target.children[1].value,
            model: e.target.children[3].value,
        }
        await axios.post(process.env.REACT_APP_BACKEND, 
            payload
        ); 
        await fetchComputers();
    }

    useEffect(()=>{
        (async ()=>{
           await fetchComputers();
        })();
    },[]);
    return <>
        <div>home page! crazy!</div>
        <Link to="/profiles">to profiles</Link>
        <form onSubmit={onFormSubmit}>
            <label >manufacturer</label>
            <input type="text" name="manufacturer"/>
            <label>model</label>
            <input type="text" name="model"/>
            <label>ram</label>
            <input type="number" name="ram"/>
            <label>disk</label>
            <input type="number" name="disk"/>
            <button type="submit">SUBMIT</button>
        </form>
        {
            val.map((computer, index)=>{
                return <Computer key={index} {...computer}/>
            })
        }
    </> 
}