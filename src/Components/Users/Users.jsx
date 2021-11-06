import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../Assets/images/grapefruit-slice-332-332.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'profile' + u.id}>
                             <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': '48d0df11-eac4-4f00-aa28-04d1eb34a0da'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingInProgress(false, u.id);
                                    });
                                props.unfollow(u.id)}
                            }> Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': '48d0df11-eac4-4f00-aa28-04d1eb34a0da'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingInProgress(false, u.id);
                                    });
                                }
                            }>Follow</button>}

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
        <div className={s.nav}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>
    </div>

}

export default Users;