import React from "react";
import { Link } from "react-router-dom";

export const HomePage = ()=>{
    return <>
        <div>home page! crazy!</div>
        <Link to="/profiles">to profiles</Link>
    </> 
}