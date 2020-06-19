import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: auto 380px auto;
  grid-template-rows: 450px auto;
  `
  
  export const ProfileDetails = styled.div`
  display: grid;
  grid-template-rows: 150px 150px 150px;
  grid-row: 1/2;
  grid-column: 2/3;
  color: black;
  img {
    box-shadow: 0px 0px 8px 1px rgba(125,125,125,0.47);
    grid-column: 1/2;
    grid-row: 1/3;
    width: 380px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
  }
  div {
    color: white;
    grid-column: 1/2;
    grid-row: 3/4;
    display: flex;
    p:first-child {
      margin-left: 16px;
      margin-right: 8px;
      font-weight: 700;
    }
    >p {
      font-size: 30px;
    }
  }
  >p {
    margin-left: 16px;
    color: white;
    grid-column: 1/2;
    grid-row: 3/4;
    align-self: end;
    width: 320px;
  }
`
export const Choice = styled.div`
  display: flex;
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: center;
  p {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const Logo = styled.img`
  justify-self: center;
  align-self: center;
  grid-column: 2/3;
  grid-row: 1/3;
  width: 250px;
`