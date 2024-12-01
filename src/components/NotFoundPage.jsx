import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = ()=>{
    return <>
        <div>not found page</div>
        <Link to="/">Home from link</Link>
        <a href="/">home from a</a>
    </>
}