import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

    const scrolltop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
        
            <section className="main-footer">
            <hr />
                <div className="container ">
                    <div className="main">
                    <div className="left">
                    <img src="./assestmeta/Crynical/logo.svg" alt="img" />
                    </div>
                    <div className="right">
                    <p>© 2022 CYN-C Project, All Rights Reserved</p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
