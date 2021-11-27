import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({...props}, isOwner, profile, status, updateStatus, savePhoto) => {
    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                {<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />}
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
                    {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                </div>
                <p> {props.profile.aboutMe}</p>
                <ul>
                    <li>Facebook:<a href="https://www.facebook.com">{props.profile.contacts.facebook}</a>  </li>
                    <li>Website: <a href="">{props.profile.contacts.website}</a> </li>
                    <li>VK: <a href="https://www.vk.com">{props.profile.contacts.vk}</a> </li>
                    <li>Twitter: <a href="https://www.twitter.com">{props.profile.contacts.twitter}</a> </li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>YouTube: <a href="https://www.youtube.com">{props.profile.contacts.youtube}</a> </li>
                    <li>github: <a href="https://www.github.com"></a> {props.profile.contacts.github}</li>
                </ul>

            </div>

        </div>
    )
}

export default ProfileInfo;