
import React from 'react';
import './Invitation.css';
import backgroundSVG from './background.svg';

export function Invitation(){
    return(
        <div className="container">
            <div className="card" style={{ backgroundImage: `url(${backgroundSVG})`, backgroundSize: 'contain' }}>
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    height: '100%',
                    width: '100%',
                }}>

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