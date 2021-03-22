import React from 'react';

export default function Card({ img, alt, content, style }) {
  return (
    <>
      <div className="row card-sec" style={{ flexDirection: style }}>
        <div className="col-5">
          <img src={img} alt={alt} />
        </div>
        <div className="col-7">{content}</div>
      </div>
    </>
  );
}
