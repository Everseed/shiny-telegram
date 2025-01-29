import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '@components/icons/LogoIcon';
import { colors } from '@constants/colors';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${colors.background.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${colors.text.secondary};
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.background.light};
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: transform 0.1s;
  
  ${({ primary }) => primary ? `
    background-color: ${colors.primary};
    color: white;
    box-shadow: 0 4px 0 ${colors.primaryDark};
    
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 2px 0 ${colors.primaryDark};
    }
  ` : `
    background-color: transparent;
    color: ${colors.primary};
    
    &:hover {
      background-color: ${colors.background.light};
    }
  `}
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
        LearnLab
      </Logo>
      <Nav>
        <NavLink href="#how-it-works">COMMENT ÇA MARCHE</NavLink>
        <NavLink href="#courses">COURS</NavLink>
        <Button onClick={handleLogin}>SE CONNECTER</Button>
        <Button primary onClick={handleStart}>COMMENCER</Button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
