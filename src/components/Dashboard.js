// import React, { useState } from 'react';
// import Category from './Category';
// import { useStore } from '../store/useStore';

// const Dashboard = () => {
//   const categories = useStore((state) => state.categories);
//   const addWidgetToCategory = useStore((state) => state.addWidgetToCategory);

//   // Manage new widget input fields
//   const [newWidget, setNewWidget] = useState({ name: '', text: '', categoryId: '' });

//   const handleAddWidget = () => {
//     if (newWidget.categoryId && newWidget.name && newWidget.text) {
//       addWidgetToCategory(newWidget.categoryId, {
//         id: Date.now().toString(),
//         name: newWidget.name,
//         text: newWidget.text,
//       });
//       // Resetting the new widget state
//       setNewWidget({ name: '', text: '', categoryId: '' });
//     } else {
//       alert("Please fill out all fields!");
//     }
//   };

//   return (
//     <div className="dashboard">
//       {categories.map((category) => (
//         <Category
//           key={category.id}
//           category={category}
//           setNewWidgetCategoryId={(id) => setNewWidget({ ...newWidget, categoryId: id })}
//         />
//       ))}

//       {newWidget.categoryId && (
//         <div className="add-widget">
//           <h3>Add New Widget to {categories.find(cat => cat.id === newWidget.categoryId)?.name}</h3>
//           <input
//             type="text"
//             placeholder="Widget Name"
//             value={newWidget.name}
//             onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
//           />
//           <textarea
//             placeholder="Widget Text"
//             value={newWidget.text}
//             onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
//           />
//           <button onClick={handleAddWidget}>Add Widget</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.jsx

import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import SearchBar from './SearchBar';
import { useDashboard } from '../contexts/DashboardContext';

const Dashboard = () => {
  const { categories, removeWidget } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = Object.fromEntries(
    Object.entries(categories).map(([category, widgets]) => [
      category,
      widgets.filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase())),
    ])
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {Object.entries(filteredCategories).map(([category, widgets]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <button onClick={() => { setSelectedCategory(category); setShowModal(true); }}>+ Add Widget</button>
          <div className="widgets">
            {widgets.map(widget => (
              <Widget
                key={widget.id}
                widget={widget}
                onRemove={() => removeWidget(category, widget.id)}
              />
            ))}
          </div>
        </div>
      ))}

      {showModal && (
        <AddWidgetModal
          category={selectedCategory}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
