import React from 'react';

const Following = () => {
    return (
        <div class="following">
            <h2>Seguindo</h2>
            <div class="info">
                <div class="img">
                   <img src="https://avatars3.githubusercontent.com/u/8216101?v=4" alt="avatar follow" />
                </div>
                <ul class="dados">
                    <li class="nome">
                        <label>Nome:</label> kakuzops
                    </li>
                    <li class="url">
                        <label>Url:</label> https://github.com/kakuzops
                    </li>
                    <li class="followers">
                        <label>Followers:</label> 3
                    </li>
                    <li class="following">
                        <label>Following:</label> 4
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Following;