import React from 'react'
import styled from 'styled-components'

const whenImageRight = `
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #d4dada;
  background-position-x: right;
`

const Wrapper = styled.div`
  height: calc(40.333vh - 2rem);
  min-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('${props => props.image}') center;
  background-size: cover;
  
`

const Text = styled.span`
  padding: .5rem;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  // font-size: ${props => props.size === 1 ? '1rem' : '3rem'}; // just for s
  color: white;
  text-shadow:
    -1px -1px 0 #262626,
    1px -1px 0 #262626,
    -1px 1px 0 #262626,
    1px 1px 0 #262626;
`

const Section = ({ image, textLeft, textRight, flip, imageRight, Textcenter, }) =>
  <Wrapper image={image} >
    <Text size={flip ? 0.5 : 1.0} align='center'>{Textcenter}</Text>
    
  </Wrapper>

export default Section