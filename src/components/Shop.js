import React from "react";
import {FaAngleLeft,FaUserFriends,FaChartBar,FaStar} from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";

import '../App.css'


function Shop() {
    const overStyle ={
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderTop:'1px solid black',
        // borderRadius:'25px',
    }
    
    const performStyle ={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        position:'relative',
        top:'-49px'
    }
   

    const resultsDiv ={
        
        paddingLeft:'20px',
        marginRight:'98px'
        
    }

      const resultsDivH4 ={
        marginBottom:'-9px',
        color:'#fff'
      }

        const overViewImage ={
            width :'30%',
            display:'flex',
            justifyContent:'center',
            alignItem:'center',
            marginLeft:'9em'

        }

        const overViewImageDiv ={
            marginTop:'3rem',
        //   background:'#000',
          marginLeft:'12px'
        }

        // const performDivbgSpan ={
        //     background: "#000",
        //     color: "#fff",
        //     width:"32px",
        //     borderRadius: "50%",
        //     height:"30px",
        //     alignItems: "center"
        // }
    
     
    return(
        <div className="test">
                    <div className="overView">
                                    <div style={overStyle}>
                                            <span className="headNav"><FaAngleLeft/></span>
                                        <h1 className="overViewh1" >Overview</h1>
                                        <span className="headNav"><BiDotsVerticalRounded/></span>
                                    </div>

                                    <div className="middleOverviewSection">
                                        <div  classname='overViewImageDiv' style={overViewImageDiv}>
                                            <span className="imageSvgOva">
                                                <div className="imageSvgOv">
                                                    <img className="imageSvgOve" src={require("../images/marie.jpg")} style={overViewImage} alt="haa"/>
                                                </div>
                                            </span>
                                        </div>
                                    
                                        

                                        <div className="perfomanceIcon" style={performStyle}>
                                            <span className="performDivbg Divbg">
                                                    <h4>Performance</h4>
                                                    <img src={require("../images/user-performance-5635092-4692649.png")} alt="perfomance img"/>
                                                </span>
                                        
                                        

                                                <span className="performDivbgSpan" >
                                                    <div>
                                                        <FaChartBar/>
                                                    </div>
                                                </span>
                                                
                    
                                        </div>

                                        <div className="perfomanceIcons" style={performStyle}>
                                                <span className="performDivbgSpan">
                                                <div>
                                                    <FaUserFriends/>
                                                    </div>
                                                </span>

                                                <span className="performDivbg Divbg ">
                                                <div className="results">
                                                        <h3>23 
                                                            </h3>
                                                        <span className="performDivArr" ><FiArrowUpRight/></span>
                                                    
                                                    </div>
                                                    <div className="Bresults"> 
                                                        <p>
                                                        better results
                                                    </p> 
                                                    </div>
                                                
                                                </span>
                                        </div>
                                    </div>
                                        
                                    <div className="Divresult" >
                                        <span className="StarDiv">
                                            <div >
                                                <FaStar/>
                                            </div>
                                        </span>

                                        <div style={resultsDiv}>
                                            <h4 style={resultsDivH4}>Great results so far!</h4>
                                            <p>Do you want to see full history <br/>or send the message to this member?</p>
                                            {/* <p>or send the message to this member?</p> */}
                                        </div>
                                    </div>
                            </div>
        </div>
        
    )
}

export default Shop;