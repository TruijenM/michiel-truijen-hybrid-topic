import {type Editor} from "@tiptap/react";
import {Button} from "@/components/ui/button";
import {BoldIcon, Heading1Icon, Heading2Icon, ItalicIcon} from "lucide-react";

interface ToolbarProps {
    editor: Editor | null;
}

export function Toolbar({ editor }: ToolbarProps) {
    if (!editor) {
        return null;
    }


    return (
        <div className={"my-2"}>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleHeading({ level: 1 }).run();
                }}
                size="sm"
                variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
            >
                <Heading1Icon />
            </Button>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
                size="sm"
                variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
            >
                <Heading2Icon />
            </Button>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBold().run();
                }}
                size="sm"
                variant={editor.isActive('bold') ? 'default' : 'ghost'}
            >
                <BoldIcon />
            </Button>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleItalic().run();
                }}
                size="sm"
                variant={editor.isActive('italic') ? 'default' : 'ghost'}
            >
                <ItalicIcon />
            </Button>
            <Button onClick={()=>
                console.log(editor.getJSON())}
            >toon json</Button> <Button onClick={()=>
                console.log(editor?.getHTML())}
            >toon html</Button>
        </div>
    );
}