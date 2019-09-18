import React from 'react'

const Navigation = props => {
    return (
        <ul className="navigation">
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

export default Navigation;