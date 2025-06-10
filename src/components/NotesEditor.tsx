import { type FC, useEffect, useRef } from "react";
import type { Note } from "../types/note";

interface NoteEditorProps {
  note: Note;
  onUpdate: (updatedNote: Note) => void;
}

const NotesEditor: FC<NoteEditorProps> = ({ note, onUpdate }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus(); // Auto-focus the textarea when switching tabs
    }
  }, [note.id]);

  const handleChange = (field: "title" | "content", value: string) => {
    onUpdate({ ...note, [field]: value });
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <input
        value={note.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Title"
        className="text-xl font-semibold p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        ref={textareaRef}
        value={note.content}
        onChange={(e) => handleChange("content", e.target.value)}
        placeholder="Write your note..."
        className="h-[300px] resize-none p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NotesEditor;
