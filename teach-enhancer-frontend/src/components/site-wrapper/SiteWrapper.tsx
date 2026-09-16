import { Outlet } from "react-router-dom";

export default function SiteWrapper() {
    return (
        <div className="site-wrapper">
            <Outlet />
        </div>
    );
}