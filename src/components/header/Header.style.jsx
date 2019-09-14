import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
const Logocontainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`
const OptinsWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  background-color: transparent;
  font-weight: bold;
  border: none;
  font-family: inherit;
  font-size: inherit;
  opacity: 0.75;
  transition: opacity 100ms ease-out;
  &:focus,
  &:hover {
    opacity: 1;
  }
`

export { HeaderWrapper, OptinsWrapper, Option, Logocontainer }
