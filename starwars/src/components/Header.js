import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`   
    
    align="center";
    width: 300px;
    margin: 0 auto;
    text-align: center;
`;


const StyledHeading3 = styled.h3`

    font-size: 2rem;
    color: Red;
    
`;

function Header () {
     
    
    return (
        
        
        <div className="cards">
            
        <HeaderDiv>
             
           
                        
            <StyledHeading3>REACT WARS</StyledHeading3>
                     
  
           
        </HeaderDiv>
    
        </div>
    );
    
    
    
    };
    
    

    export default Header;