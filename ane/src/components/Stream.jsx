import React from 'react';

const Stream = ({track = []}) => {
  return (
    <div>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
};

export default Stream;