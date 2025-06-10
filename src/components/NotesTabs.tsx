import React from 'react'
import { Note } from '../types/note';

interface NotesTabsProps {
    notes: Note[];
    activeNoteId: string | null;
    onSwitch: (id: string) => void;
    onAdd: () => void;
    onDelete: (id: string) => void;
}

const NotesTabs: React.FC<NotesTabsProps> = ({ notes, activeNoteId, onSwitch, onAdd, onDelete }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
    {/* All tabs (notes) */}
    {notes.map((note) => (
      <div
        key={note.id}
        className={`px-4 py-2 rounded cursor-pointer flex items-center gap-2 ${
          note.id === activeNoteId
            ? "bg-blue-600 text-white"
            : "bg-gray-300 text-black"
        }`}
        onClick={() => onSwitch(note.id)}
      >
        <span>{note.title || "Untitled"}</span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent switching tabs
            onDelete(note.id);   // delete that tab
          }}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          ×
        </button>
      </div>
    ))}

    {/* Add new note tab */}
    <button
      onClick={onAdd}
      className="ml-auto px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      + New
    </button>
  </div>
  )
}

export default NotesTabs
