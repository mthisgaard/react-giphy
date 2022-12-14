import React from 'react';

const Gif = (props) => {
  const { gifId, setSelectedId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;

  const handleClick = () => {
    setSelectedId(gifId);
  };

  return (
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
};

export default Gif;
