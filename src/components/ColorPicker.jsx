import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000",
          "#353934",
          "#ccc",
          "#80C670",
          "#5F3",
          "#EFBD4E",
          "#00008b",
          "#5123DA",
          "#726DE8",
          "#7098DA",
          "#2CCCE4",
          "#ff8a65",
          "#C19277",
          "#8B0000",
          "#512314",
          "#5F123D",
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker