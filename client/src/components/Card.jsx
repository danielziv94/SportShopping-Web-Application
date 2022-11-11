import styled from "styled-components";

const Card = (props)=>{
    return(
        <Container>
            <img src="/src/assets/sportAcc.jpg" alt={props.label}/>
            {props.label}
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    background-color: #f5f5cb;
    scale: 0.9;
    transition: 250ms;
    &:hover{
        scale:1;
        filter: drop-shadow(2px 4px 6px black);
    }
`

export default Card;