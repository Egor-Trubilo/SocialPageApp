import React from 'react';
import s from './users.module.css';
import * as axios from "axios";


    let Users = (props) => {

        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items);
            });

            props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                    followed: true,
                    fullName: 'Egor',
                    status: 'i am the best',
                    location: {city: 'Kalchi', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                    followed: true,
                    fullName: 'Sergey',
                    status: 'gigi',
                    location: {city: 'Mozyr', country: 'Russian Federation'}
                },
                {
                    id: 3,
                    photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                    followed: false,
                    fullName: 'Natallia',
                    status: 'pfff',
                    location: {city: 'Gomel', country: 'Belarus'}
                },
            ]

        )

    }

    return <div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ?  <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>

}

export default Users;