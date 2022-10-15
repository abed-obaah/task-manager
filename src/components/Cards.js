import React from "react";
import '../App.css'

function Card() {
    const cardStyle={
        // border:'1px solid black',
        borderRadius:'19px',
        // textAlign:'center',
        width:'20%',
        height:'60px',
        marginRight:'19px',
        padding: '30px 125px 34px 22px'
        // overFlow:'scroll'
    }
  

    const cardWraper ={
//         marginLeft:'27px',
        width:'400px',
        display:'flex',
        justifyContent: 'space-evenly',
        // alignContent: 'flex-start',
        // alignItems: 'baseline',
        overflow:'hiden',
        overflowX: 'scroll'
    }
    return(
        <>
            <div className='CardWraper' style={cardWraper}>
                    <div className='addTask' style={cardStyle}>
                          <div className="innerDive">
                            <span className="span addTaskSpan">Add task</span>
                            <p>Creatives<br/>for branding</p>
                          </div>
                          
                    </div>
                    <div className='card aedp' style={cardStyle}>
                            <span className="span addTaskSpan1">Review</span>
                            <p>Verification<br/> process with team</p>
                    </div>
                    <div className='card aedp'style={cardStyle} >
                            <span className="span addTaskSpan1">Review</span>
                            <p>Verification<br/> process with team</p>
                    </div>
                    <div className='card aedp' style={cardStyle}>
                            <span className="span addTaskSpan1">Review</span>
                            <p>Verification<br/> process with team</p>
                    </div>
            </div>
        </>
    )
}

export default Card;
