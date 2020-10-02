import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
`
export const Nav = styled.div`

` 
export const LibraryDiv = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  >img {
    width: 25px;
    padding: 8px;
  }
  >span {
    font-weight: 700;
  }
  :hover {
    background-color: greenyellow;
  }
  cursor: pointer;
`
export const PlaylistsDiv = styled.div`
  >ul {
    margin-left: -20px;
    width: 120px;
    >div {
      display: flex;
      justify-content: space-between;
      >img {
        width: 12px;
        cursor: pointer;
      }
      >li {
        margin-right: 4px;
        list-style: none;
        cursor: pointer;
        padding: 4px;
        :hover {
          color: white;
          background-color: black;
        }
      }
    }
  }
  margin-left: 18px;
`
export const PlaylistTracksDiv = styled.div`
  margin-left: 64px;
  >section {
    display: flex;
    width: 500px;
  }
  .nameDiv{
    margin-top: 10px;
    width: inherit;
    display: flex;
    flex-direction: column;
  }
  .artistDiv{
    margin-top: 10px;
    width: inherit;
    display: flex;
    flex-direction: column;
  }
`
