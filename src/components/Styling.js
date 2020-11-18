import styled from 'styled-components'
import bgimage from '../assets/quiz-bg.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${bgimage});
  border: 1px dashed green;
`

export const Header = styled.title`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-right: 20px;
  width: 50%;
  height: 80%;
  font-size: 18px;
  color: #fff;
`

export const StartButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-right: 20px;
  width: 40px;
  height: 22px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  background: #fcee00;
  cursor: pointer;
`
