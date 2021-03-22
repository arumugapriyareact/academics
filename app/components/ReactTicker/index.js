import React from 'react';
import Ticker from 'react-ticker';

const ReactTicker = ({ data }) => (
  <div className="ticker">
    <Ticker speed={5}>
      {({ index }) => (
        <span className="ticker_content">
          {data}
          {/* Одесский военный округ преобразован в Южный фронт */}
        </span>
      )}
    </Ticker>
  </div>
);

export default ReactTicker;
