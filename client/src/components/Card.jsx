import styled from "styled-components";

const Card = ({label})=>{
    return(
        <Container>
            <Image src={require("../assets/sportAcc.jpg")} alt={label} />
            {label}
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 3ram;
    max-height: 3ram;
    border-radius: 5px;
    text-align: center;
    background-color: #f5f5cb;
    scale: 0.9;
    transition: all 250ms;
    &:hover{
        scale:1;
        filter: drop-shadow(2px 4px 6px black);
    }
`
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    max-width: 100%;
`
export default Card;