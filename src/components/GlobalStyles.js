import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
        @media (max-width: 1200px) {
            font-size: 75%;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #1B2631;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        font-family: 'Permanent Marker', cursive;
        font-weight: lighter;
        color: #F5F5F5;
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0;
    }

    p {
        font-size: 1.2rem;
        line-height:  200%;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    
`;

export default GlobalStyles;