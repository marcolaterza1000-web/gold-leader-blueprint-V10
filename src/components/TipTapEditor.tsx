import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { Bold, Italic, Heading2, Heading3, List, LinkIcon } from "lucide-react";

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const addLink = () => {
    const url = prompt("URL eingeben:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  const btnClass = (active: boolean) =>
    `p-2 rounded transition ${active ? "bg-[#f59e0b] text-[#0a0a0a]" : "text-white/50 hover:text-white hover:bg-white/10"}`;

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <div className="flex gap-1 p-2 border-b border-white/10 bg-white/[0.02]">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive("bold"))}><Bold size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive("italic"))}><Italic size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btnClass(editor.isActive("heading", { level: 2 }))}><Heading2 size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btnClass(editor.isActive("heading", { level: 3 }))}><Heading3 size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive("bulletList"))}><List size={16} /></button>
        <button type="button" onClick={addLink} className={btnClass(editor.isActive("link"))}><LinkIcon size={16} /></button>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-invert max-w-none p-4 min-h-[300px] text-white font-inter text-base [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[280px] [&_h2]:text-[#f59e0b] [&_h3]:text-[#f59e0b] [&_a]:text-[#f59e0b] [&_a]:underline"
      />
    </div>
  );
};

export default TipTapEditor;
