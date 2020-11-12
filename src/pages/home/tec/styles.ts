import styled from 'styled-components';

export const Tec = styled.section`
width: 100vw;
height: 1002px;
background: #000;
display:flex;
flex-direction: column;

.container{
    width: 1194px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-self: center;
    overflow: visible;
}

.slider{
    width: 3672px;
    display: block;

    ul{
        width: 100% !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        transition: transform 1s;

        li{
            width: 1194px;
            height: 755px;
            padding: 0 !important;
            position: relative;

            img{
                width: 1194px;
                height: 750px;
                border-radius: 10px;
            }

            .text{
                position: absolute;
                width: 800px;
                top: 630px;
                left: 20px;
                text-align: justify;
                color: #f5f5f5;
                text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
                h1{
                    font-size: 21px;
                    font-weight: bold;
                }
                p{
                    font-size: 16px;
                    margin-top: 15px;
                }
            }
        }
    }
}
`;

export const Title = styled.div`
width: 1194px;
font-size: 21px;
font-weight: bold;
margin-top: 30px;
align-self: center;
`;

export const Buttons = styled.div`
width: 1194px;
height: 72px;
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content:space-between;

.dotTec{
    width: 120px;
    height: 20px;
    align-self: center;

    button{
        width: 20px;
        height: 20px;
        border-radius: 50%;

        & + button{
            margin-left: 30px;
        }
    }
}

.btnTec{
    width: 190px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button{
        width: 72px;
        height: 87px;
        border-radius: 10px;
        cursor: pointer;
    }
        svg{
            color: #292929;
        } 
} 
`;

