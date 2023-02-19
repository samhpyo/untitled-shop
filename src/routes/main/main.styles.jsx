import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  position: absolute;
  font-size: 100px;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Span = styled.span`
  width: fit;
  height: fit;
  opacity: 0.2;
  color: white;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
