"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageButton = exports.withImages = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var slate_1 = require("slate");
var slate_react_1 = require("slate-react");
var Button_1 = __importDefault(require("./Button"));
var insertImage = function (editor, url) {
    // const text = { text: '' }
    var image = { type: 'image', url: url, children: [{ text: '' }] };
    console.log('editor selection:', editor.selection);
    slate_1.Transforms.insertNodes(editor, image);
};
var withImages = function (editor) {
    var insertData = editor.insertData, isVoid = editor.isVoid;
    editor.isVoid = function (element) {
        return element.type === 'image' ? true : isVoid(element);
    };
    editor.insertData = function (data) {
        var e_1, _a;
        // const text = data.getData('text/plain')
        var files = data.files;
        console.log('insert image data:', files);
        if (files && files.length > 0) {
            var _loop_1 = function (file) {
                var reader = new FileReader();
                var _a = __read(file.type.split('/'), 1), mime = _a[0];
                if (mime === 'image') {
                    reader.addEventListener('load', function () {
                        var url = reader.result;
                        var src = typeof url === 'string' ? url : Buffer.from(url).toString();
                        insertImage(editor, src);
                    });
                    reader.readAsDataURL(file);
                }
            };
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    _loop_1(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
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
exports.withImages = withImages;
//
var ImageButton = function (_a) {
    var icon = _a.icon, uploadFn = _a.uploadFn;
    var editor = slate_react_1.useSlate();
    return (jsx_runtime_1.jsxs(Button_1.default, __assign({ active: false, onMouseDown: function (event) {
            // 如果这里没有 preventDefault 则在下面的onClick中，editor.selection 为空
            event.preventDefault();
        }, onClick: function (event) {
            // console.log('clicked image btn:', editor.selection)
            var element = document.querySelector('#editor-image-upload');
            element.click();
        } }, { children: [jsx_runtime_1.jsx("i", { className: icon }, void 0),
            jsx_runtime_1.jsx("input", { id: "editor-image-upload", type: "file", accept: "image/*", style: { display: 'none' }, onChange: function (event) { return __awaiter(void 0, void 0, void 0, function () {
                    var file, reader, uri;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                event.preventDefault();
                                file = event.target.files && event.target.files[0];
                                console.log('file', file);
                                if (!file) {
                                    return [2 /*return*/];
                                }
                                console.log('image upload:', file);
                                reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.addEventListener('load', function (evt) {
                                    console.log('evt:', evt);
                                    console.info(reader);
                                    var data = evt.target.result;
                                    var img = new Image();
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
                                if (!uploadFn) return [3 /*break*/, 2];
                                return [4 /*yield*/, uploadFn(file)];
                            case 1:
                                uri = _a.sent();
                                insertImage(editor, uri);
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); } }, void 0)] }), void 0));
};
exports.ImageButton = ImageButton;
