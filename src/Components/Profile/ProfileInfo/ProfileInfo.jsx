import React from "react";
import p from "./ProfileInfo.module.css"
import Preloader from "../../common/Preolader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {



    return (
        <div>

            <div className={p.descriptionBlock}>
                {/*<ProfileStatus status={'hiiiiiii'}/>*/}
                <div>
                    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                </div>
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