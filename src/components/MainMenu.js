import React from 'react'

const MainMenu = props => {
    return (
        <ul className="main-menu">
            {props.menuItems.map(item =>
                <li>
                    <a href={item.anchor}>
                        {item.text}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default MainMenu;