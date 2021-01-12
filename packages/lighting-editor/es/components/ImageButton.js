var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Transforms } from 'slate';
import { useSlate } from 'slate-react';
import Button from './Button';
const insertImage = (editor, url) => {
    // const text = { text: '' }
    const image = { type: 'image', url, children: [{ text: '' }] };
    console.log('editor selection:', editor.selection);
    Transforms.insertNodes(editor, image);
};
const withImages = (editor) => {
    const { insertData, isVoid } = editor;
    editor.isVoid = element => {
        return element.type === 'image' ? true : isVoid(element);
    };
    editor.insertData = data => {
        // const text = data.getData('text/plain')
        const { files } = data;
        console.log('insert image data:', files);
        if (files && files.length > 0) {
            for (const file of files) {
                const reader = new FileReader();
                const [mime] = file.type.split('/');
                if (mime === 'image') {
                    reader.addEventListener('load', () => {
                        const url = reader.result;
                        let src = typeof url === 'string' ? url : Buffer.from(url).toString();
                        insertImage(editor, src);
                    });
                    reader.readAsDataURL(file);
                }
            }
            // } else if (isImageUrl(text)) {
            //   insertImage(editor, text)
        }
        else {
            insertData(data);
        }
    };
    return editor;
};
//
const ImageButton = ({ icon, uploadFn }) => {
    const editor = useSlate();
    return (_jsxs(Button, Object.assign({ active: false, onMouseDown: (event) => {
            // 如果这里没有 preventDefault 则在下面的onClick中，editor.selection 为空
            event.preventDefault();
        }, onClick: (event) => {
            // console.log('clicked image btn:', editor.selection)
            let element = document.querySelector('#editor-image-upload');
            element.click();
        } }, { children: [_jsx("i", { className: icon }, void 0),
            _jsx("input", { id: "editor-image-upload", type: "file", accept: "image/*", style: { display: 'none' }, onChange: (event) => __awaiter(void 0, void 0, void 0, function* () {
                    event.preventDefault();
                    let file = event.target.files && event.target.files[0];
                    console.log('file', file);
                    if (!file) {
                        return;
                    }
                    console.log('image upload:', file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener('load', (evt) => {
                        console.log('evt:', evt);
                        console.info(reader);
                        let data = evt.target.result;
                        let img = new Image();
                        img.src = typeof data === 'string' ? data : Buffer.from(data).toString();
                        img.alt = file.name;
                        img.onload = function () {
                            console.log('img width height:', img.width, img.height);
                        };
                        if (!uploadFn) {
                            insertImage(editor, img.src);
                        }
                        // const text = { text: '' }
                        // const image = { type: 'image', url: img.src, children: [text] }
                        // Transforms.insertNodes(editor, image)
                        // editor.insertData(img)
                    });
                    if (uploadFn) {
                        let uri = yield uploadFn(file);
                        insertImage(editor, uri);
                    }
                }) }, void 0)] }), void 0));
};
export { withImages, ImageButton };
