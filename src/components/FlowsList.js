import React from "react";
import '../App.css'
import Footer from './FrontPage/Footer'
import { FaCaretDown,FaPlus } from "react-icons/fa";
function Flows() {
    const FlowsList ={
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '444px'
    }
    const FlowsListH4 = {
          fontWeight:'bold',
          color:'#000',
          fontSize:'21px',
          marginBottom: '5px'
    }
    const flowlistP ={
        color:'gray',
        fontWeight:'bold'
    }
    return( 

        
        <>
        <div className="flowlistDiv">
               <div  style={FlowsList}>
                    <div className="listFlow">
                          <h2>Flows list  </h2>
                          <span><FaCaretDown/></span>
                    </div>
                    
                    <p style={flowlistP}>See all</p>
                </div>
                <div style={FlowsList}>
                    <div >
                       <h4 style={FlowsListH4}>Document verification</h4>
                       <span className="Timerspan"> 3 min ago</span>
                    </div>
                    
                    <span className="plusSpan">
                       <FaPlus/>
                    </span>
                    
                </div>
                <div style={FlowsList}>
                    <div>
                        <h4 style={FlowsListH4}>Newbie onboarding</h4>
                        <span className="Timerspan"> 3 min ago</span>
                    </div>
                    
                    <span className="plusSpan">
                       <FaPlus/>
                    </span>
                    
                </div>
                <Footer/>
        </div>
           
        </>
    )
    
}

export default Flows;