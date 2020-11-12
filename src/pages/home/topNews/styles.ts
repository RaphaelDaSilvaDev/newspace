import styled from 'styled-components';

export const Top = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

.container{
    width: 1194px;
    display: grid;
    grid-template-areas:
		"main main sideOne"
		"main main sideTwo"
		"main main sideThree"
		;
    row-gap: 42px;
    column-gap: 20px;

    .main{
        grid-area: main;
        width: 684px;
        position: relative;
        img{
            width: 684px;
            border-radius: 10px;
        }

        .texts{
            width: 500px;
            position: absolute;
            top: 310px;
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

    .sideOne{
        grid-area: sideOne;
        width: 490px;
        height: 121px;
        position: relative;
        background: #292929;
        border-radius: 10px;
        display: flex;
        align-items: center;
        img{
            width: 174px;
            height: 121px;
            border-radius: 10px;
        }

        .texts{
            width: 280px;
            position: absolute;
            left: 190px;
            text-align: justify;
            color: #f5f5f5;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            h1{
                font-size: 16px;
                font-weight: bold;
            }
            p{
                display: none;
            }
        }
    }

    .sideTwo{
        grid-area: sideTwo;
        width: 490px;
        height: 121px;
        position: relative;
        background: #292929;
        border-radius: 10px;
        display: flex;
        align-items: center;
        img{
            width: 174px;
            height: 121px;
            border-radius: 10px;
        }

        .texts{
            width: 280px;
            position: absolute;
            left: 190px;
            text-align: justify;
            color: #f5f5f5;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            h1{
                font-size: 16px;
                font-weight: bold;
            }
            p{
                display: none;
            }
        }
    }

    .sideThree{
        grid-area: sideThree;
        width: 490px;
        height: 121px;
        position: relative;
        background: #292929;
        border-radius: 10px;
        display: flex;
        align-items: center;
        img{
            width: 174px;
            height: 121px;
            border-radius: 10px;
        }

        .texts{
            width: 280px;
            position: absolute;
            left: 190px;
            text-align: justify;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            h1{
                font-size: 16px;
                font-weight: bold;
            }
            p{
                display: none;
            }
        }
    }
}

`;
