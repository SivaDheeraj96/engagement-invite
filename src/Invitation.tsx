
import React from 'react';
import './Invitation.css';
import backgroundSVG from './background.svg';

export function Invitation(){
    return(
        <div className="container">
            <div className="card" style={{ backgroundImage: `url(${backgroundSVG})`, backgroundSize: 'contain' }}>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255,0.7)',
                    height: '100%',
                    width: '100%',
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
                        paddingTop: '32px',
                    }}>
                        <text style={{display: 'block'}}>Siva Dheeraj Reddy Obulam</text>
                        <text style={{display: 'block'}}>&</text>
                        <text style={{display: 'block'}}>Tejaswini Avisana</text>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <text style={{display: 'block'}}>We're overjoyed to share our exciting news!</text>
                        <text style={{display: 'block'}}>Please join us for an engagement celebration</text>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '8px',
                        marginTop: '16px',
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
                    }}>
                        <text style={{display: 'block'}}>Time</text>
                        <text style={{display: 'block', fontWeight: 'bold'}}>
                            11:00 AM PST
                        </text>
                    </div>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '8px',
                        marginTop: '16px',
                    }}>
                        <text style={{display: 'block'}}>Location</text>
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
    )
}


interface IconProps_t{
    iconName: string;
    style?: Object;
}
function Icon(props: IconProps_t){
    const {iconName, style} = props;
    const SVGComp = React.useMemo(() => {
        switch(iconName){
            case 'Background':
                return null;
        }
    }, [iconName]);

    if(!SVGComp) return null;
    return (
        <div style={style}>
            {SVGComp}
        </div>
    )
}