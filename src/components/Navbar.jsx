import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";

export default function Navbar() {
    return (
      <nav className="flex j-between">
        <div className="user">
            <h2>Hello Sadiq</h2>
            <span>{new Date()}</span>
        </div>
      </nav>  
    );
}
