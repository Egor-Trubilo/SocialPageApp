import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                {<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>}
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <p> {props.profile.aboutMe}</p>
                <ul>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>Website: {props.profile.contacts.website}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>YouTube: {props.profile.contacts.youtube}</li>
                    <li>github: {props.profile.contacts.github}</li>
                </ul>

            </div>

        </div>
    )
}

export default ProfileInfo;