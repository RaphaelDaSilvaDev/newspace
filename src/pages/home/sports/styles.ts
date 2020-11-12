import styled from 'styled-components';

export const Sports = styled.section`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

.container{
    width: 1194px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
}
`;

export const SliderDiv = styled.div`
overflow: hidden;
width: 1090px;
ul{
    list-style: none;
    width: 2225px !important;
    display: flex;
    flex-direction: row;
    transition: transform 1s;
    li{
        padding-bottom: 0 !important;
        a{
            width: 194px;
            height: 190px;
            img{
                width: 194px;
                height: 130px;
                border-radius: 10px;
            }
            h1{
                width: 194px;
                font-size: 13px;
                font-weight: bold;
                text-align: justify;
            }
        }
    }
}
`;

export const Title = styled.div`
width: 1190px;
height: 30px;
align-content: flex-start;
`;

export const Buttons = styled.div`
margin-left: 30px;
width: 72px;
height: 190px;
display: flex;
flex-direction: column;
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
`;
