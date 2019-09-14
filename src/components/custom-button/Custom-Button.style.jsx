import styled, { css } from 'styled-components'

export const ButtonStyle = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid #000;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
function getButtonStyles(props) {
  if (props.google) return googleSignInStyle

  return props.inverted ? invertedStyles : ''
}
