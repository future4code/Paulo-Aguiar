import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: auto 380px auto;
  grid-template-rows: 450px auto;
  `
export const Profiles = styled.div`
  width: 380px;
  height: 450px;
  grid-column: 2/3;
  border-radius: 5%;
  box-shadow: 0px 0px 8px 1px rgba(125,125,125,0.47);
  div {
    cursor: pointer;
    margin: 16px;
    display: flex;
    :hover {
      background-color: whitesmoke;
    } 
    img {
      margin-right: 16px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`

