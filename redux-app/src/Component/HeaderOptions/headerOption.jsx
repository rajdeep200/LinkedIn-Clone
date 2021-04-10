import React from 'react';
import './headerOption.css'

const HeaderOption = ({Icon, title, onClick}) => {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
