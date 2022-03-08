// import { useState } from 'react';

import { PlayerData } from '../../types/player';

type PlayerProps = {
  data: PlayerData;
}


function Player({ data }: PlayerProps): JSX.Element {

  return (
    <video
      className="player__video"
      muted
      src={data.trailer}
      poster={data.poster}
      width="280"
      height="175"
      autoPlay
    >
    </video>
  );
}

export default Player;
