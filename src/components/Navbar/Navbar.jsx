import React, { useEffect } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  useEffect(() => {
    const mainNav = document.querySelector('#mainNav');
    if (mainNav && window.bootstrap && window.bootstrap.ScrollSpy) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    } else {
      console.warn("Bootstrap ScrollSpy is not available.");
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light py-4" id="mainNav">
      <div className="container px-4 px-lg-5">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/logonavbar.png`} alt="مؤسسة نسمة الحسي التجارية" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars className="fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item"><a className="nav-link margintop" href="#hero">الرئسية</a></li>
            <li className="nav-item"><a className="nav-link" href="#Latestworks">الخدمات</a></li>
            <li className="nav-item"><a className="nav-link" href="#Latestarticles">أين نتواجد</a></li>
            <li className="nav-item">
                    <a className="nav-link call" href="tel:0500686864">اتصل بنا</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
