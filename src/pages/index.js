import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookF, FaRegEnvelopeOpen } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'

import Section from '../components/Section'

import logo from '../images/D-Logo-pink.png'
import image1 from '../images/Pink Background-Promo 5.png'
import image2 from '../images/Picture-Guy Walking-Promo 5.png'
import image3 from '../images/Picture-Buildings-Promo 5.png'


import './styles.css'

const Wrapper = styled.div`
  font-family: sans-serif;
`

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  background-color: black;
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
  color: salmon;
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
      <Section image={image1} textLeft='Weddings' textRight='Capture your big moment.' />
      <Section image={image2} textLeft='Every detail forever.' textRight='Engagements' flip />
      <Section image={image3} textLeft='Portraits' textRight='A photographic story.' />
    </Content>

    <Footer>
      <SocialIcon href='tel:9569291450' target='_blank'><MdPhone style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaInstagram style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaFacebookF style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaRegEnvelopeOpen style={{ display: 'flex' }} /></SocialIcon>
    </Footer>

  </Wrapper>

export default IndexPage
