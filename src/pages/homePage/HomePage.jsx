import React from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { useSelector } from 'react-redux';
import {SERVER_URL} from '../../env.js';

import defaultAvatar from '../../resources/img/profile-img.png';
import './homePage.scss';

function HomePage() {
    const user = useSelector(state => state.user.currentUser);
    const avatar = user.avatar ? `${SERVER_URL + user.avatar}` : defaultAvatar;

    return (
        <div className="profile">
            <HeaderTitle>Profile</HeaderTitle>
            <article className="profile__content container">
                <div className="profile__box">
                    <div className="profile__ava-box">
                        <img className="profile__ava" src={avatar} alt="User" />
                    </div>
                    <h3 className="profile__email">{user.email}</h3>
                </div>
            </article>
        </div>
    );
}

export default HomePage;