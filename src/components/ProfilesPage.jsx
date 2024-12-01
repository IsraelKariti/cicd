import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ProfilesPage = ()=>{
    const profiles = [1,2,3,4,5];

    return <div className="flex flex-col gap-2">
            {profiles.map((profile)=><Link to={`/profiles/${profile}`}>profile {profile}</Link>)}
            <Outlet />
        </div>
}