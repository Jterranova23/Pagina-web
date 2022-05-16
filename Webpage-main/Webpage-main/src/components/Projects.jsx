import React from 'react'
import { Container } from './Global.style'
import CriptoImg from '../assets/CriptoLinkedin (2).PNG'
import WeatherApp from '../assets/Weatherapp.PNG'
import MoviesApp from '../assets/MoviesApp.PNG'
import Menu from '../assets/MenuSS.PNG'
import Comments from '../assets/comments.PNG'
import Crud from '../assets/Crud.PNG'
import styled from 'styled-components'
import {DiGithubFull} from 'react-icons/di'
import {MdRemoveRedEye} from 'react-icons/md'



export default Projects

export const Cabecera = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #2dfff5;
  }
  small,
  p {
    color: #fff9;
  }
  p {
    margin: 10px 0 20px 0;
  }
  @media screen and (min-width: 836px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
    small {
      font-size: 18px;
      margin: 0 0 10px 0;
    }
  }
`;

