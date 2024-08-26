// import React from 'react';

// const Widget = ({ widget, onRemove }) => {
//   return (
//     <div className="widget">
//       <h4>{widget.name}</h4>
//       <p>{widget.text}</p>
//       <button onClick={onRemove}>Remove Widget</button>
//     </div>
//   );
// };

// export default Widget;

// src/components/Widget.jsx

import React from 'react';

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={onRemove}>Remove Widget</button>
    </div>
  );
};

export default Widget;
