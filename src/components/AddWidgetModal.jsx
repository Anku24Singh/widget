// src/components/AddWidgetModal.jsx

import React, { useState } from 'react';
import { useDashboard } from '../contexts/DashboardContext';

const AddWidgetModal = ({ category, onClose }) => {
  const { addWidget } = useDashboard();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      const newWidget = { id: Date.now(), name: widgetName, text: widgetText };
      addWidget(category, newWidget);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Widget to {category}</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>Add Widget</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
