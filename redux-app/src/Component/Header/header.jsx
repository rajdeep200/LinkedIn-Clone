import React from 'react';
import './header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import  HeaderOption  from "../HeaderOptions/headerOption";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutFromApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="left__header">
                <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" alt="LinkedIn Logo"/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search..." type="text"/>
                </div>
            </div>
            <div className="right__header">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Chats"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon={ExitToAppIcon} title="Log Out" onClick={logoutFromApp} />
            </div>
        </div>
    )
}

export default Header;
