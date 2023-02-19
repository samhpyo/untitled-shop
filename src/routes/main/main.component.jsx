/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import { useNavigate } from 'react-router-dom';
import eajwakingup from '../../assets/eajwakingup.mp4';
import { MainContainer, Video, Content, Span } from './main.styles';

const Main = () => {
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate('/home');
  };

  return (
    <MainContainer>
      <Video src={eajwakingup} autoPlay loop muted />
        <Content>
          <Span onClick={goToHomeHandler}>ENTER</Span>
        </Content>
    </MainContainer>
  );
};

export default Main;
