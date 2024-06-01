import React from 'react';
import '../Legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#a50f15' }}>100000-1000000</div>
            <div style={{ "--color": '#de2d26' }}>10000-100000</div>
            <div style={{ "--color": '#fb6a4a' }}>1000-10000</div>
            <div style={{ "--color": '#fc9272' }}>1-1000</div>
            <div style={{ "--color": '#fcbba1'}}>0</div>
    
        </div>
    );
}
export default Legend;

