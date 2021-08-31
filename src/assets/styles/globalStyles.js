import { createGlobalStyle } from 'styled-components';

import CocogooseProLightEot from '../fonts/CocogoosePro-Light.eot';
import CocogooseProLightSvg from '../fonts/CocogoosePro-Light.svg';
import CocogooseProLightTtf from '../fonts/CocogoosePro-Light.ttf';
import CocogooseProLightWoff from '../fonts/CocogoosePro-Light.woff';
import CocogooseProLightWoff2 from '../fonts/CocogoosePro-Light.woff2';
import RobotoEot from '../fonts/Roboto-Regular.eot';
import RobotoSvg from '../fonts/Roboto-Regular.svg';
import RobotoTtf from '../fonts/Roboto-Regular.ttf';
import RobotoWoff from '../fonts/Roboto-Regular.woff';
import RobotoWoff2 from '../fonts/Roboto-Regular.woff2';
import CocogooseProEot from '../fonts/CocogoosePro.eot';
import CocogooseProSvg from '../fonts/CocogoosePro.svg';
import CocogooseProTtf from '../fonts/CocogoosePro.ttf';
import CocogooseProWoff from '../fonts/CocogoosePro.woff';
import CocogooseProWoff2 from '../fonts/CocogoosePro.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cocogoose Pro Regular';
    src: url(${CocogooseProEot});
    src: 
        url(${CocogooseProWoff}) format('woff'),
        url(${CocogooseProWoff2}) format('woff2'),
        url(${CocogooseProTtf}) format("truetype"),
        url(${CocogooseProSvg}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
    font-family: 'Cocogoose Pro Light';
    src: url(${CocogooseProLightEot});
    src: 
        url(${CocogooseProLightWoff}) format('woff'),
        url(${CocogooseProLightWoff2}) format('woff2'),
        url(${CocogooseProLightTtf}) format("truetype"),
        url(${CocogooseProLightSvg}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
 
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoEot});
    src: 
        url(${RobotoWoff}) format('woff'),
        url(${RobotoWoff2}) format('woff2'),
        url(${RobotoTtf}) format("truetype"),
        url(${RobotoSvg}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
 


  html {
    box-sizing: border-box;
    font-family: 'Cocogoose Pro light',Sans-Serif;
    background-color: ${(props) => props.theme.white};
    scroll-behavior: smooth;
    transition: all 0.25s ease;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration:none;
  }
 
  ul, li, h1, h2, h3, p  {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: 0;
  }

  body {
   
    margin: 0 auto;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    overscroll-behavior: none;
    width: 100%;
    transition: all 0.25s ease;
  }

  body {
    margin: 0 auto;
    /* overscroll-behavior: none; */
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    overflow-x: hidden;
  }
`;
