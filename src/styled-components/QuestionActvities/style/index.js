import styled from 'styled-components'

export const QuestionActivitiesStyle = styled.div`
  width: 90%;
  height: 6rem;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
export const OptionStyle = styled.button`
  width: ${props => 
            props.OptionLength > 20 ? '12rem' : '8rem'
          };
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.5rem;
  font-size: .75rem;
  font-weight: 600;
  color: #3fc6df;
  background: #c3dfe5;
  cursor: pointer;
  &:focus{
    background: #3fc6df;
    color: white;
    outline-color: none;
    outline: none;
  }
`