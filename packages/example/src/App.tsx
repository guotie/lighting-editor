import './App.scss';
// @ts-ignore
import { LightingEditor } from 'lighting-editor'

// import '@fortawesome/fontawesome-free'

function App() {
  const initialValue = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable ' },
        { text: 'rich', bold: true },
        { text: ' text, ' },
        { text: 'much', italic: true },
        { text: ' better than a ' },
        { text: '<textarea>', code: true },
        { text: '!' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            "Since it's rich text, you can do things like turn a selection of text ",
        },
        { text: 'bold', bold: true },
        {
          text:
            ', or add a semantically rendered block quote in the middle of the page, like this:',
        },
      ],
    },
    {
      type: 'block-quote',
      children: [{ text: 'A wise quote.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'Try it out for yourself!' }],
    },
  ]
  
  return (
    <div className="App">
      <header className="App-header">
      <svg width="50px" height="100px" viewBox="0 0 23 34">
        <defs>
          <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="blue"/>
              <stop offset="100%" stopColor="red"/>
          </linearGradient>
        </defs>
        <path style={{fill: 'url(#orange_red)'}} fillRule="nonzero" stroke="none" strokeWidth="1" d="M0 19.9187087L9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0z">
          </path>
      </svg>
        <LightingEditor content={initialValue} />
      </header>
    </div>
  );
}

export default App;
