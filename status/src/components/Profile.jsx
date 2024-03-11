import React, { useEffect } from "react";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlert } from "../context/actions/alert";
import { useParams } from 'react-router-dom'
const Profile = ({ userData, totalAlerts }) => {
  console.log(userData)
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <span class="home__greeting">Hello, I'm</span>
          <h1 class="home__name">{userData?.fullName}</h1>
          <h3 class="home__education"><strong>Mobile&nbsp;: &nbsp;</strong>{userData?.mobile}</h3>
          <div class="home__buttons">
            <a href="#" class="button button--ghost">
              Download
            </a>
            <a href="#alerts" class="button">Show Alerts</a>
          </div>
        </div>

        <div class="home__handle">
          <img src="assets/img/perfil.png" alt="" />
        </div>

        <div class="home__social">
          <a href="#" class="home__social-link"><i class='bx bxl-linkedin-square'></i></a>
          <a href="#" class="home__social-link"><i class='bx bxl-instagram'></i></a>
          <a href="#" class="home__social-link"><i class='bx bxl-facebook-circle'></i></a>
        </div>
        <a href="#about" class="home__scroll">
          <i class="bx bx-mouse home__scroll-icon"></i>
          <span class="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Profile;
