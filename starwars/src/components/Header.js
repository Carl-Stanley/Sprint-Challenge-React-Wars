import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`     
    
    width: 700px;
    height: 150px;
    padding-bottom: 20px;
    
`;

function Header () {     
    
    return (
            
        <HeaderDiv className="Header"></HeaderDiv>    
       
        );    
    };
    
    export default Header;