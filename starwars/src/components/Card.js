import React from "react";
import styled from 'styled-components'; 

const WrapperDiv = styled.div`
    
    padding: 10px 10px 10px 10px;
    width: 300px;
    height: 150px;
    margin: 0 auto;
    background-color: blue;    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-image: url("https://png.pngtree.com/thumb_back/fw800/back_pic/04/52/29/19585fbe8a10416.jpg");
    align="left";

    box-shadow: 2px 2px 2px 2px #ffff66;

    &:hover {

        box-shadow: 2px 2px 2px 2px red;
        
        h1 {
               color: red;
        }
    }
    

`;


const StyledHeading = styled.h1`

    font-size: .6rem;
    color: white;
    
`;

function Card ({props}) {
     
    let url = props.name;

    url = url.replace(' ', '_');

    url = "https://starwars.fandom.com/wiki/" + url;

    return (
        
        
        <div className="cards">
            
        <WrapperDiv>
             
           
                        <a href={url}> {props.name}</a>
            <StyledHeading>Birth Year:   {props.birth_year}</StyledHeading>
            <StyledHeading>Gender:   {props.gender}</StyledHeading>
            <StyledHeading>Hair Color:   {props.hair_color}</StyledHeading>
            <StyledHeading>Skin Color:   {props.skin_color}</StyledHeading>
            <StyledHeading>Mass:   {props.mass}</StyledHeading>     
                
                  
  
           
        </WrapperDiv>
    
        </div>
    );
    
    
    
    };
    
    

    export default Card;