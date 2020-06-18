import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
`
export const ProfileDetails = styled.div`
  position: absolute;
  top: 70px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 380px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
  }
  div {
    position: absolute;
    top: 290px;
    display: flex;
    align-content: center;
    p:first-child {
      margin-left: 15px;
      font-weight: 700;
      margin-right: 8px;
    }
    >p {
      font-size: 30px
    }
  }
  >p {
    width: 300px;
    position: absolute;
    top: 360px;
    left: 15px;
  }
`
export const Choice = styled.div`
  span {
    color: red;
    font-size: 25px;
    font-weight: 700;
  }
  p {
    margin: 30px;
  }
  margin-top: 150px;
  display: flex;
  align-self: center;
`