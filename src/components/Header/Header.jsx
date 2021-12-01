import React from 'react';

import {NavLink} from "react-router-dom";
import styled from "styled-components";

import PhotosHeader from '../../assets/images/camera-header.svg'
import userPhoto from "../../assets/images/user.png";

const StyledCard = styled.header`
  background-color: white;
    border-bottom: 1px solid #e5e7eb;
    z-index: 99;
    align-items: center;
    display: flex;
    margin: auto;
    
  .headerItem{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    padding: 0 15px;
  }
  .loginBlock{
    float: right;
  }
  .imgItem{
    width: 30px;
    text-align: center;
    background-color: white;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .img{
    width: 100%;
    height: 100%;
    

  }
`

const Header = (props) => {
    return  <StyledCard>
        <div className={'headerItem'}>
            <div className={'imgItem'}>
                <img className={'img'}  src={PhotosHeader}/>
            </div>
            {/*<img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>*/}
            <div className={'loginBlock'}>
                {props.isAuth
                    ?  <div>  {props.login}  <button onClick={props.logout}>logout </button>  </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    </StyledCard>

}

export default Header;