import styled from 'styled-components'
import bgimage from '../assets/quiz-bg.jpg';

export const MainContainer = styled.section`
  background: url(${bgimage}) no-repeat left center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  padding: 32px;
`

export const QuestionContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Header = styled.h1`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-right: 20px;
  width: 50%;
  height: 80%;
  font-size: 2rem;
  color: #fff;
  text-align: center;

`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 15px;
  padding: 1rem 1.5rem;
  font-weight: bold;
  border: none;
  background: #fcee00;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 4px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`

