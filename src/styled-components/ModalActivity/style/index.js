import styled from 'styled-components'

export const ModalActivityStyle = styled.div`
  width: 100%;
  height: auto;
  
  .section-title {
    height: 2rem;
    border-bottom: 3px solid #dee7f2;
    padding-top: .9rem;
    text-align: center;
    font-size: 1.25rem;
    color: #385fae;
    font-weight: 500;
    line-height: 2rem;
  }

  .section-list-wrapper {
    width: 100%;
    height: auto;
    display: flex
  }

  .list-activities {
    width: 50%;
  }

  ul.activitiesList {
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    color: #969baa;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    list-style-position: outside;
  }
  .section-image {
    width: 50%;
    height: 25rem;
  }
  .question-wrapper {
    height: 8rem;
    width: 100%
  }
  .question-prompt {
    height: 1.5rem;
    font-size: 1rem;
    color: #385fae;
    font-weight: 500;
    line-height: 1rem;
    padding-left: 1.5rem;
  }
  .button-wrapper {
    width: 80%;
    height: 2.5rem;
    border-top: 3px solid #dee7f2;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem 0 1.5rem;
  }
  .button-back {
    height: 2.5rem;
    width: 11rem;
    display: flex;
    border: 2px solid #dee7f2;
    justify-content: center;
    align-items: center;
    font-size: .85rem;
    font-weight: 700;
    color: #969baa;
    background: white;
    cursor: pointer;
      &:hover{
        background: #265e68;
        color: white;
        outline-color: none;
        outline: none;
        border: none;
      }
  }
  
  .button-continue {
    height: 2.5rem;
    width: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .85rem;
    font-weight: 700;
    color: white;
    background: #265e68;
    cursor: pointer;
      &:focus{
        outline-color: none;
        outline: none;
      }
  }
`