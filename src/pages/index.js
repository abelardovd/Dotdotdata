import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookSquare, FaRegEnvelopeOpen, FaTwitterSquare } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'

import Section from '../components/Section'

import logo from '../images/D-Logo-pink.png'

import image2 from '../images/Picture-Guy Walking-Promo 5.png'
import image3 from '../images/Picture-Buildings-Promo 5.png'


import './styles.css'

const Wrapper = styled.div`
  font-family: Haettenschweiler, sans-serif;
    
`

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`

  background-color: rgb(232, 97, 97);
  min-height: 100px;
  
  

  
`

const Footer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
`

const TextHeader = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(232, 97, 97);
`


const SocialIcon = styled.a`
  color: black;
  text-decoration: none;
`

const HeaderImage = styled.img`
  height: 2rem;
  text-align: center;
  
`


const IndexPage = () =>
  <Wrapper>

    <Header>
      <HeaderImage src={logo} />
      <TextHeader>Dot Dot Data</TextHeader>
      <HeaderImage src={logo} />
    </Header>

    <Content>
      <Section Textcenter='We belive in building networks that boost Our clients advertising performance.'/>
      <Section image={image2}/>
      <Section Textcenter='Distribute your online promotions or specials directly to anyones smartphone with bluetooth messaging.' />
      <Section Textcenter='Wanna Buy One?'/> 
      <Section Textcenter= 'Book A demo Today.'/>
      <Section image={image3}  />
    </Content>

    <Footer>
    <SocialIcon href='tel:9569291450' target='_blank'><MdPhone style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaFacebookSquare style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaInstagram style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaTwitterSquare style={{display: 'flex'}} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaRegEnvelopeOpen style={{ display: 'flex' }} /></SocialIcon>
    </Footer>

  </Wrapper>

export default IndexPage
