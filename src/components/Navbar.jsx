import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";

export default function Navbar() {
    return (
      <Nav className="flex j-between">
        <div className="user">
            <h2>Hello Aliyu Abubakar</h2>
            <span>{new Date()}</span>
        </div>

        <div className="search-container flex a-center j-center gap b-rad-1 ">
           <BsSearch/> 
           <input type="text" placeholder="search" />
        </div>

        <div className="profile flex a-center gap">
            <div className="notification">
                <img src={bell} alt="Bell" />
            </div>
            <h4>Aliyu Abubakar</h4>
            <img src={avatar} alt="Avatar" className="avatar" />
        </div>

      </Nav>  
    );
}

const Nav = styled.Nav`

    .user {
        span {
        color: var(--primary-text); 
        }
    }

`;