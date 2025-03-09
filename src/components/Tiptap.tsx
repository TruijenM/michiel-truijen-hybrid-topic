'use client'

import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {Toolbar} from '@/components/toolbar';

export default function Tiptap() {
    const editor = useEditor({
        extensions: [StarterKit.configure({heading: {levels: [1, 2]}})],
        editorProps: {
            attributes: {class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none  rounded-md border min-h-[150px] border-input'}
        },
        content: '<h1>Heading 1</h1>' +
            '<h2>Heading 2</h2>'+
            '<p>This is a paragraph.</p>', });


    return (
        <div>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />

        </div>
    );
}