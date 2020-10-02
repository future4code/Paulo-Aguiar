import styled from 'styled-components'

export const Main = styled.main`
 
`
export const AddPlaylistDiv = styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  >img {
    width: 25px;
    padding: 8px;
  }
  >span {
    font-weight: 700;
  }
  cursor: pointer;
  :hover {
    background-color: greenyellow;
  }
`
export const Form = styled.div`
    margin-left: 8px;
  >input {
    height: 24px;
    margin-bottom: 4px;
  }
  >div {
    display: flex;
    justify-content: space-evenly;
    >span {
      cursor: pointer;
    }
    >button {
      height: 28px;
      width: 96px;
      :hover {
        background-color: greenyellow;
        border: none;
      }
    }
  }
`