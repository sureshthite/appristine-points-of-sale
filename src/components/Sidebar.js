import React, { Component } from 'react';
import Category from './Category';
import addIcon from '../static/img/Component 13.png';
import userIcon from '../static/img/Component 14.png';
import searchIcon from '../static/img/Component 15.png';
import umbrellaIcon from '../static/img/Icon feather-umbrella.png';
import profileIcon from '../static/img/Mask Group 20.png';
import profileArrow from '../static/img/arrow.png';


class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="d-flex" id="wrapper" style={{backgroundColor: "#F7F7F7"}}>

                    <div className="border-right menu-back-color" id="sidebar-wrapper">
                        <div className="sidebar-heading text-white text-center">Point Of Sale </div>
                        <hr />
                        <div className="text-white">
                            <span>
                                <img src={profileIcon} alt="Profile Icon" style={{ width: "20%", marginLeft: "10px", marginRight: "20px" }} />
                                Lauren Gray
                                <img src={profileArrow} alt="More Details" style={{ width: "10%", marginLeft: "10px", marginRight: "20px", cursor: "pointer" }} />
                            </span>
                        </div>

                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Dashboard</span></a>
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Inventory</span></a>
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white active"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Category</span></a>
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Sub Category</span></a>
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Items</span></a>
                            <a href="#" className="list-group-item list-group-item-action menu-back-color text-white"><span><img src={umbrellaIcon} style={{ width: "10%", marginLeft: "10px", marginRight: "20px" }} />Receipts</span></a>
                        </div>
                    </div>


                    <div id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

                            <p className="text-secondary">Hello Lauren, Welcome back</p>
                            <select className="form-control" name="select category" style={{width: "12%"}}>
                                <option value="">All Category</option>
                                <option value="1">Banana</option>
                                <option value="2">Colgate</option>
                            </select>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginTop: "-30px" }}>
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <span><img src={addIcon} className="header-icon" /></span>
                                    </li>
                                    <li className="nav-item">
                                        <span><img src={userIcon} className="header-icon" /></span>
                                    </li>
                                    <li className="nav-item">
                                        <span><img src={searchIcon} className="header-icon" /></span>
                                    </li>
                                </ul>
                            </div>
                        </nav>



                        {/* Add Routing Logic Here with based on menu and component */}

                        <Category />





                    </div>


                </div>
            </div>
        );
    }
}

export default Sidebar;