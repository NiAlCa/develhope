import { Link, Outlet } from "react-router-dom";

export function Catalogue(){
    return(
        <div>
            <h2>All products</h2>
            <ul>
                <li><Link to="/products/1">Product1</Link></li>
                <li><Link to="/products/2">Product2</Link></li>
                <li><Link to="/products/3">Product3</Link></li>
                <li><Link to="/products/4">Product4</Link></li>
                <li><Link to="/products/5">Product5</Link></li>
                <li><Link to="/products/6">Product6</Link></li>
            </ul>
            <hr/>

            <Outlet/>
        </div>
    )
}