import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);`
;

const Button = styled.button`
  background-color: #4cafef;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3b8fd9;
  }`
;

export { Wrapper, Button };