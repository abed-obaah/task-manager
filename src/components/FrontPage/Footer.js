import React from "react";
import { FaHome,FaSatelliteDish, FaWrench} from "react-icons/fa";

function Footer(){
    const footer ={
        display:'flex',
        justifyContent: 'space-between',
        fontSize: '22px'
    }

    return(
        <>
        <div>
            <ul style={footer}>
                <li><FaHome/></li>
                <li><FaSatelliteDish/></li>
                <li><FaWrench/></li>
            </ul>
        </div>
        </>
    );
}

export default Footer;