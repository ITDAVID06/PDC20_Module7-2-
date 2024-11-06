import React from "react";

const Tab =({name, isActive, onClick}) => {
    
    const tabStyle = {
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: isActive ? '2px solid blue' : 'none',
        color: isActive? 'blue': 'black',
    };


    return(
        <div style={tabStyle} onClick={onClick}>
            {name}

        </div>
    );

}

export default Tab;