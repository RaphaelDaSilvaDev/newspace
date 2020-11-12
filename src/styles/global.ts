import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: #1A1A1A;
        -webkit-font-smoothing: antialiased;  
        margin: 0 auto;
        overflow-x: hidden;
    }

    #root{
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    button, input{
        border: none;
    }

    h1, p, a, li{
        color: #f5f5f5;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
`;