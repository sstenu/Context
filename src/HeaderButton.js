import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
const color = React.useContext(ThemeContext);

  return (
    <div>
      <button style={color.blue}>Press me</button>
    </div>
  );
}

export default HeaderButton;
