import React from "react";
import "./Layout.css"
function Layout() {
    return (
        <div className="container">
             <div className="layout">
            <p>sidebar</p>
            <div className="body">
                <p>navbar</p>
                <div className="body_contents">
                    <p>body</p>
                </div>
            </div>
            </div>
            <div className="footer">
                <p>footer</p>
            </div>
      
        </div>
       
    )
}

export default Layout;