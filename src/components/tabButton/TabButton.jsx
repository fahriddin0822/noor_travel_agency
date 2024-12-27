const TabButton = ({ active, onClick, text }) => (
    <button
      className={`px-4 py-2 rounded ${active ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );