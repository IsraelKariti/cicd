import React from "react";

export const Computer = ({manufacturer, model, ram, disk, price})=>{
    return <div>
        <p>{manufacturer} {model} {ram} {disk} {price}</p>
    </div>
}