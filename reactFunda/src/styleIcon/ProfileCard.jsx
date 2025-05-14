import React from 'react';

const ProfileCard = () => {
  const style = {
    backgroundColor: '#141',
    color: 'beige',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '5px',
  };
  return (
    <div style={style}>
      <h1>John Two</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
        perspiciatis inventore aspernatur totam magnam itaque aut id, iusto
        iure, aperiam delectus porro facere quidem ad sunt omnis expedita vel
        impedit eaque odit mollitia?
      </p>
    </div>
  );
};

export default ProfileCard;
