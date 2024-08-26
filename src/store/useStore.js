import create from 'zustand';

export const useStore = create((set) => ({
  categories: [
    {
      id: '1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: '1', name: 'Cloud Accounts', text: 'Connected (2)\nNot Connected (2)' },
        { id: '2', name: 'Cloud Account Risk Assessment', text: 'Failed (1689)\nWarning (588)\nNot available (26)\nPassed (7235)' },
      ],
    },
    {
      id: '2',
      name: 'CWPP Dashboard',
      widgets: [
        { id: '3', name: 'Top 5 Namespace Specific Alerts', text: 'No Graph data available' },
        { id: '4', name: 'Workload Alerts', text: 'No Graph data available' },
      ],
    },
    {
      id: '3',
      name: 'Registry Scan',
      widgets: [
        { id: '5', name: 'Image Risk Assessment', text: '1470 Total Vulnerabilities\nCritical (9)\nHigh (560)' },
        { id: '6', name: 'Image Security Issues', text: '2 Total Images\nCritical (2)\nHigh (2)' },
      ],
    },
  ],

  addWidgetToCategory: (categoryId, widget) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      ),
    })),

  removeWidgetFromCategory: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: category.widgets.filter((widget) => widget.id !== widgetId) }
          : category
      ),
    })),
}));
