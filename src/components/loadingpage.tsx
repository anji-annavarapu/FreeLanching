import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background1.jpg';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
  min-height: 100vh;
  padding: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(50, 50, 50, 0.0); // Adjust the RGBA values and opacity as needed
    z-index: 1;
  }
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;
const Logo = styled.div`
  font-size: 50px;
  font-weight: Pacifico;
  color: #1b874e;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LandingPage: React.FC = () => 
{
    return (
      <LandingPageContainer>
        <Navbar>
          <Logo>XYZ</Logo>
          <NavLinks>
            <a href="#">Home</a>
            <a href="#">Industries</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Login</a>
          </NavLinks>
        </Navbar>
    </LandingPageContainer>
    );
};
export default LandingPage;