import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('red');

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)} value={color} className="border px-2 py-1">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <div
        className="w-24 h-24 mt-4 border"
        style={{ backgroundColor: color }}
      >{color}</div>
    </div>
  );
};

export default ColorPicker;
