import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>My App</h1>
            <ul className="sidebar-menu">
                <li><a href="#dashbaord">Dashboard</a></li>
                <li><a href="#barchart">Bar chart</a></li>
                <li><a href="#scatterplot">Scatter plot</a></li>
                <li><a href="#piechart">Pie chart</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
