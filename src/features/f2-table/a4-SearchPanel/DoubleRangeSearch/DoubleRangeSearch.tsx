import React, {useState} from 'react';
import InputRange, {Range} from "react-input-range";
import "react-input-range/lib/css/index.css"

export function RangeSlider() {
    const [value5,setValue] = useState<any>({min:0,max:20})
    return (
        <InputRange
            draggableTrack
            maxValue={20}
            minValue={0}
            value={value5}
            onChange={value => {console.log(value)
                setValue(value)
            }} />
    );}
