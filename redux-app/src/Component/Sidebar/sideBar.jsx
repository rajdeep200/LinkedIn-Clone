import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './sideBar.css';

const SideBar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sideBar__recentitems">
            <span className="sideBar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sideBar">
            <div className="sideBar__top">
                <img src="https://th.bing.com/th/id/Rbce35881ddd4b03a5651e3ee05b5a39b?rik=KYJeM%2bhTR8LjPA&riu=http%3a%2f%2fwww.drodd.com%2fimages10%2fbeach-wallpaper26.jpg&ehk=gGY3pyX4icyBZBGPjUb5Bu7vpwemnJyb9oJBqGjF%2fi4%3d&risl=&pid=ImgRaw" alt=""/>
                <Avatar src={user.photoUrl} className="sideBar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4> {user.email} </h4>
            </div>
            <div className="sideBar__stats">
                <div className="sideBar__stat">
                    <p>People viewed you</p>
                    <p className="sideBar__statNumber">2000</p>
                </div>
                <div className="sideBar__stat">
                    <p>Post views</p>
                    <p className="sideBar__statNumber">3500</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('javascript')}
            </div>
        </div>
    )
}

export default SideBar;