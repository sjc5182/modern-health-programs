import styled from 'styled-components'

export const SectionsModalStyle = styled.div`
  width: 15rem;
  height: 20rem;
  border: 3px solid #dee7f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 0 .25rem;
  cursor: pointer;
   &:hover{
    box-shadow: rgba(189, 207, 217, 0.42) 0px 16px 50px 0px;
    border: 3px solid #d3d9e2;
   }
  .img-size {
    width: 12rem;
    height: 12rem;
    display: flex;
    margin: 0 auto;
  }
  .modal-part {
    width: auto;
    height: 2rem;
    padding-left: 1rem;
    font-size: .75rem;
    font-weight: 200;
    color: #969baa;
  }
  .modal-description {
    width: auto;
    height: 3rem;
    padding-left: 1rem;
    font-size: 1rem;
    color: #385fae;
    font-weight: 700;
  }
`

//00b2d6