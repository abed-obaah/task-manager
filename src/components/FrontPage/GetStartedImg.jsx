import React from "react";
// import Marie from "src/"
import '.././../App.css'
// import {Link} from 'react-router-dom';
import { FaArrowRight,FaArrowUp } from "react-icons/fa";

function GetStarted() {
    // redirecting to dashboard.
    const linking = e =>{
        // alert('hello');
        window.location.href='./dashboard'
    }
    const imgDiv ={
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    }

    const imgStyle ={
        width:'20%',
        // borderRadius:"50px"
    }
    const butStyle = {
        width:'50%',
        padding:'15px',
        border:'none',
        borderRadius:"50px",
        background:'#000',
        color:'#fff',
        display:"flex",
        justifyContent:'center',
        alignItem:'center',
        cursor: "pointer"
    }
    const buttonDiv ={
        // width:'100%',
        // maxWidth:'50%',
        margin:'23px',
        marginTop:'51px',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    }
    const FaArrow={
        background: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)',
        padding: '11px 12px 8px 12px',
        borderRadius: '50%',
        position: 'relative',
        left: '-47px',
        alignItems: 'center'
    }
    const item ={
        // background:'black'
        transform:'rotate(20deg)'
    }
    return(
        <div className="GetStartedDiv" >
            <div style={imgDiv}>
               <img className="marie" style={imgStyle} src={require(".././../images/marie.jpg")} alt="" />

               <p className="pBack"><span className="lastWeekNum">50</span><FaArrowUp style={item}></FaArrowUp> <br/> <small>last week</small></p>
            </div>

            <div style={imgDiv}>
                
               <img className="marie01" style={imgStyle} src={require(".././../images/marie.jpg")} alt="" />
            </div>

            <div style={imgDiv}>
            <p><span className="lastWeekNum">50</span> <FaArrowUp style={item}></FaArrowUp> <br/> <small>last week</small></p>
               <img className="marie02" style={imgStyle} src={require(".././../images/marie.jpg")} alt="" />
            </div>
            {/* <Link to="/src/components/Shop.js"> about page</Link> */}

           <div style={buttonDiv}>
                <button style={butStyle} onClick={linking} >
                        Get Started
                    </button>
                    <span style={FaArrow}><FaArrowRight/></span>
           </div>
        </div>
    )
}

export default GetStarted;