'use client';

import { styled } from '@mui/material';

const Main = styled('main')({
  position: 'relative',
  width: '200px',
  height: '200px',
  borderRadius: '100%',
  '.quarter1': {
    top: '50px',
    left: '50px',
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'red',
    borderRadius: '100%',
    zIndex: 2,
  },
  '.quarter2': {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'pink',
    borderRadius: '100%',
    zIndex: 1,
  },
});

export const ColorMenu: React.FC = () => {
  return (
    <Main>
      <div className="quarter quarter1">1</div>
      <div className="quarter quarter2">2</div>
      <div className="quarter quarter3">3</div>
      <div className="quarter quarter4">4</div>
      <div className="quarter quarter5">5</div>
      <div className="cutout"></div>
    </Main>
  );
};
