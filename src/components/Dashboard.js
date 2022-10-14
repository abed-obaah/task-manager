import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Card from './Cards';
import Flows from './FlowsList';
import {FaSearch} from "react-icons/fa";
import Navbar2 from './FrontPage/Navbar2';
// import NavBar from "../components/Nav.js"
function About() {
    const imageStyle={
        width: '6%',
        height:'10%',
        borderRadius:'50%'
    }

    const UserHeader ={
      display: 'flex',
      flexFlow: 'row wrap',
      placeContent: 'flex-end space-between',
      alignItems: 'center',
      marginTop: '-41px',
      marginLeft:'-12px',
      justifyContent: 'space-around'
    }

   //  const dashBoard ={
   //    backgroundColor:'#e2e2de'
   //  }
   
    return(
      <div className="test dashboard">
         
         <div>
               {/* <NavBar /> */}
               <Navbar2/>
            
                  <div>
                        <h3>Welcome back,</h3>
                        <div className='userheader'  style={UserHeader}>
                              <h1>Carolina Terner</h1>
                              <img  style={imageStyle} src={require("../images/team-2.jpg")} alt="images" />
                        </div>
                  </div>
                  <div className='searchBtn'>
                     {/* <span><FaSearch/></span> */}
                     <input className='searchBtnInput' type='text' placeholder='Try to find..' />
                  </div>
                  <div className='tsk-h1'>
                     <h1>Task-based<br/>explanation process</h1>  
                  </div>
                  <Card />
                  <Flows/>
       </div>
      </div>
      
    )
}

export default About;