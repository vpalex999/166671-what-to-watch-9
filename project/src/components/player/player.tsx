// import { useState } from 'react';

type PlayerProps = {
  src: string;
  poster?: string;
}


function Player(props: PlayerProps): JSX.Element {

  // const [soundOn, setSoundOn] = useState(false);

  return (
    <video
      className="player__video"
      src={props.src}
      poster={props.poster}
      width="280"
      height="175"
      autoPlay
    >
    </video>
  );
}

export default Player;
