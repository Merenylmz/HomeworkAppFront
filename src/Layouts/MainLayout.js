import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import "../Styles/Common.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutOperation } from "../Redux/Actions/AuthAction";

const MainLayout = () =>{
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    
    const logoutBtn = async() =>{
        await logoutOperation();
        dispatch({type: "LOGOUT"});
        window.location.reload();
    };

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom: "1px solid #A8E5D3", height: "110px"}}>
                <div class="container-fluid">
                    {/* <NavLink className="navbar-brand text-dark" to="/" style={{transform: "rotate(-40deg)"}}><h1>E-Odev</h1></NavLink> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <form class="d-flex " role="search">
                            <input class="form-control me-2 btn-sm align-items " style={{width: "450px", height: "30px"}} type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success btn-sm" type="button">Search</button>
                        </form>
                        {
                            auth && auth.isAuth ?<li class="nav-item">
                            <NavLink className="navBtn" aria-current="page" onClick={()=>logoutBtn()}>Logout</NavLink>
                        </li> : <><li class="nav-item">
                            <NavLink className="navBtn" aria-current="page" to="/login">Login</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navBtn" to="/register">Register</NavLink>
                        </li></> 
                        }
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>
            <div className="container">
                <Outlet/>
            </div>

            <div className="container">
                {/* <footer style={{position: "fixed", bottom: 0, width:"1000px"}}>
            <hr/>
                    <div class="row">
                    <div class="col-8 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    
                    <div class="col-4 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between border-top">
                    <p>© 2022 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#a"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#a"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="a#"><svg class="bi" width="24" height="24"></svg></a></li>
                    </ul>
                    </div>
                </footer> */}
            </div>
        </div>
    );
};

export default MainLayout;