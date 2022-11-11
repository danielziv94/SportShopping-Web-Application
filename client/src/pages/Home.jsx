import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import styled from "styled-components";

const dummyData = [
    {label:"item 1"},
    {label:"item 2"},
    {label:"item 3"},
    {label:"item 4"},
    {label:"item 5"},
    {label:"item 6"},
];

const Home = ()=>{
    return(
        <div>
            <NavBar />
            <CardsContainer>
                {dummyData.map((data)=>{
                    return(
                        <Card label={data.label}/>
                    )
                })}
            </CardsContainer>
        </div>
    );
};

export default Home;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,120px);
    gap: 6px;
`