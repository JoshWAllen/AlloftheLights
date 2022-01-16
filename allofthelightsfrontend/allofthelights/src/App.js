import './App.css';
import './Toggle.css';
import Button from 'react-bootstrap/Button';
import Color from './Color';
import React from 'react';
import Toggle from 'react-toggle';
import { nanoid } from 'nanoid';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

function App() {
  //States
  const [mode, setMode] = React.useState('single');

  // const [colors, setColors] = React.useState(allNewColors());

  // function allNewColors() {
  //   const newColors = [];
  //   for (let i = 0; i < 8; i++) {
  //     newColors.push({
  //       colorCode: '#888888',
  //       id: nanoid(),
  //     });
  //   }
  //   return newColors;
  // }

  const [color, setColor] = useColor('hex', '#121212'); // color state from library

  React.useEffect(() => {
    fetch('/colors')
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
  }, []);

  const [fade, setFade] = React.useState(false);

  // function changeColor(event) {
  //   setColors((prevColors) => {
  //     prevColors.map((color) =>
  //       color.id === event.target.id ? event.target.value : color
  //     );
  //   });
  // }

  // //Key used here is not unique but should do.
  // const colorElements = [];

  // if (colors) {
  //   colorElements = colors.map((color) => {
  //     return (
  //       <Color
  //         key={color.id}
  //         id={color.id}
  //         colorCode={color.colorCode}
  //         changeColor={changeColor}
  //       />
  //     );
  //   });
  // } else {
  //   console.log('error');
  //   colorElements = 'hello';
  // }

  //Select event handler
  function handleSelect(event) {
    setMode(event.target.value);
  }

  //fade toggle handler
  function toggle() {
    setFade((prevState) => !prevState);
  }

  return (
    <div className='App'>
      <div className='form container'>
        <select
          className='form-select form-select-lg mb-3'
          aria-label='.form-select-lg example col'
          name='mode'
          value={mode}
          onChange={handleSelect}
        >
          <option value='single color'>Single Colour</option>
          <option value='blinking'>Blinking lights</option>
          <option value='slow fade'>Slow Fade</option>
          <option value='absolute shaker'>Absolute Shaker</option>
        </select>
        <label>
          <span>Jump</span>
          <Toggle defaultChecked={fade} icons={false} onChange={toggle} />
          <span>Fade</span>
        </label>
      </div>
      <div className='color-container'>
        <ColorPicker
          width={456}
          height={228}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
      </div>
    </div>
  );
}

export default App;
