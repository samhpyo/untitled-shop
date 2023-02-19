/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useRef } from 'react';
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { TwitchEmbed } from 'react-twitch-embed';
import astronaut from '../../assets/astronaut.jpg';

import { Container, Section } from './home.styles';

const Home = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <Container>
      <Section>
        <YouTubeEmbed
          url="https://www.youtube.com/watch?v=D3t0GP1Rqek"
          width="80%"
          height={800}
        />
      </Section>
      <Section>
        <InstagramEmbed
          url="https://www.instagram.com/p/CoMA4ztOeGQ/"
          width="26.5%"
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/CnCuB4SJQ5g/"
          width="25%"
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="eaJPark"
          options={{ height: 990, width: 750 }}
        />
      </Section>
      <Section>
        <TwitchEmbed
          channel="eajparkofficial"
          autoplay
          muted
          withChat
          width="90%"
          height="90%"
          darkMode={false}
          hideControls
          onVideoReady={handleReady}
        />
      </Section>
      <Section>
        <h1>No Upcoming Shows</h1>
      </Section>
      <Section>
        <img src={astronaut} alt="astronaut" style={{ height: '150%' }} />
      </Section>
    </Container>
  );
};

export default Home;
