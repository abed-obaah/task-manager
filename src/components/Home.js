import React from "react";
import GetStarted from "./FrontPage/GetStartedImg";
import { FaWaveSquare } from "react-icons/fa";
import "../App.css";


function Home() {
    const isBackgroundLemon = true;
   
    return(
        <React.Fragment>
        <div className="tests" style={{
           backgroundColor: isBackgroundLemon ? '#B4E600' : '#D3D3D3',
        }}>
                <div className="taskHome">
                    <div className="taskHomeContainer">
                        <div className="headerHome"> 
                                <h1>Market<br/>
                            your growth strategy
                            </h1> 

                            <div className="Fawave"><FaWaveSquare/></div>
                        </div>
                    </div>
                   
                   
                    <GetStarted/>
                </div>
        </div>
         
        </React.Fragment>
       
    );
}

export default Home;