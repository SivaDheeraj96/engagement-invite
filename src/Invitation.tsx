
import React from 'react';
import './Invitation.css';
import backgroundSVG from './background.svg';

export function Invitation(){
    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Waterfall&display=swap" rel="stylesheet" />
            <div className="container fancy-font">
                <div className="card" 
                    style={{ 
                        backgroundImage: `url(${backgroundSVG})`, 
                        backgroundSize: 'contain',
                        border: '5px solid #FFD700',
                        }}>
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255,0.7)',
                        height: '100%',
                        width: '100%',
                        // color: 'rgb(0,0,0)',
                        color: 'brown',
                    }}>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '16px',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            fontWeight: 'bold',
                            fontSize: '38px',
                            // color: 'red',
                        }}>
                            <text style={{display: 'block'}}>Siva Dheeraj Reddy Obulam</text>
                            <text style={{display: 'block'}}>&</text>
                            <text style={{display: 'block'}}>Tejaswini Avisana</text>
                        </div>
                        <div className="fancy-font-2"  style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            fontSize: '32px',
                            fontWeight: 600,
                            // color: 'green',
                        }}>
                            <text style={{display: 'block'}}>We're overjoyed to share our exciting news!</text>
                            <text style={{display: 'block'}}>Please join us for our engagement celebrations</text>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '8px',
                            marginTop: '16px',
                            fontSize: '28px',
                            // color: 'blue',
                        }}>
                            <text style={{display: 'block'}}>Date</text>
                            <text style={{display: 'block', fontWeight: 'bold'}}>
                                December 14<sup>th</sup> 2024
                            </text>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '8px',
                            marginTop: '16px',
                            fontSize: '28px',
                            // color: 'magenta',
                        }}>
                            <text style={{display: 'block'}}>Time</text>
                            <text style={{display: 'block', fontWeight: 'bold'}}>
                                11:00 AM PST
                            </text>
                        </div>


                        <div className="fancy-font-2" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '8px',
                            marginTop: '16px',
                            fontSize: '32px',
                            // color: 'brown',
                        }}>
                            <text style={{display: 'block', fontSize: '64px'}}>Location</text>
                            <text style={{display: 'block'}}>
                                <a style={{ fontWeight: 'bold', color: 'inherit'  }} href='https://maps.app.goo.gl/M5REqQxLEieJ37oJ6'>
                                    278 Terra Mia Ave, Tracy, CA 95391
                                </a>
                            </text>
                        </div>
                    

                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}


// interface IconProps_t{
//     iconName: string;
//     style?: Object;
// }
// function Icon(props: IconProps_t){
//     const {iconName, style} = props;
//     const SVGComp = React.useMemo(() => {
//         switch(iconName){
//             case 'Background':
//                 return null;
//         }
//     }, [iconName]);

//     if(!SVGComp) return null;
//     return (
//         <div style={style}>
//             {SVGComp}
//         </div>
//     )
// }