import React from 'react';
import Widget from './Widget';

const Category = ({ category, setNewWidgetCategoryId }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <button onClick={() => setNewWidgetCategoryId(category.id)}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;
