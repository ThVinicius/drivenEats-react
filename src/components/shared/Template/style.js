import styled from 'styled-components'

const Container = styled.div`
  background-color: #ffffff;
  margin-right: 16px;
  max-width: 172px;
  width: 100%;
  height: 216px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  border: ${props => props.border};

  ion-icon {
    color: green;
    width: 19px;
    height: 19px;
  }

  && > div {
    width: 148px;
    display: flex;
    flex-direction: column;
  }
  && div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 144px;
    height: 87px;
    border-radius: 4px;
    object-fit: cover;
  }
  h6 {
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin: 5px;
    font-family: 'Roboto', sans-serif;
  }
  p {
    font-size: 15px;
    font-weight: 300;
    color: #a6a6a6;
    margin: 5px;
    font-family: 'Roboto', sans-serif;
  }
  h5 {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    margin: 5px;
    font-family: 'Roboto', sans-serif;
  }
`
const Amount = styled.div`
  width: 47px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #cf2b2b;
    font: normal 400 16px 'Roboto';
    cursor: pointer;
  }
  h2 {
    font: normal 400 16px 'Roboto';
  }
  h4 {
    color: green;
    font: normal 400 16px 'Roboto';
    cursor: pointer;
  }
`

export { Container, Amount }
