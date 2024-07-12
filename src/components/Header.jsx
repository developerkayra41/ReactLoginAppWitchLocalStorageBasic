import React from 'react';

function Header({ isLogin, user, age }) {
    return (
        <div id='header'>
            {isLogin ? <div>{user.name}, {user.age}</div> : <div>Please log in</div>}
        </div>
    );
}

export default Header;
