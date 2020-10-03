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
            onChange={value => setValue({value5: value})} />
    );}

export class ExampleApp extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            value5: {
                min: 3,
                max: 7,
            },
        };

    }
  render() {

      return <InputRange
      draggableTrack
      maxValue={20}
      minValue={0}
      onChange={value => this.setState({ value5: value })}
      onChangeComplete={value => console.log(value)}
          // @ts-ignore
      value={this.state.value5} />
  }
}