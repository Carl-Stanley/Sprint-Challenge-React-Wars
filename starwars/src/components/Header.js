import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`   
    
    align="center";
    width: 700px;
    height: 150px;
    margin-left: 10px;
`;

function Header () {     
    
    return (
            
        <HeaderDiv className="Header"></HeaderDiv>    
       
        );    
    };
    
    export default Header;