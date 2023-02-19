/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Spotify = styled(Iframe)`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;
