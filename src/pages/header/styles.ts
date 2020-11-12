import styled from 'styled-components';

export const Head = styled.section`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.container{
    width: 1194px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
        width: 210px;
        height: 58px;
    }

    ul{
        list-style: none;
        display: flex;

        li{
            font-weight: bold;
            font-size: 21px;

            & + li{
                margin-left: 30px;
            }
        }
    }
}

hr{
    width: 100vw;
    border: 1px solid #292929;
}
`;