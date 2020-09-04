import React, {useState} from "react";
import style from "./css.module.css";
import { setStartPagePaginatorActionType } from "../../../m2-bll/table-reduser";

type PaginatorPropsType ={
    maxPages: number
    startValue: number
    endValue:number
    goStart : () => void
    goFinish : () => void
    goPage : (value:number) => void
}
const Paginator = (props:PaginatorPropsType) => {

    // const [endValue,SetEndValue] = useState<number>(5)
    // const [startValue,SetStartValue] = useState(1)
    // for ( startValue; startValue <= maxPages; ()=> SetStartValue(startValue+1) ) {
    //      buttons[startValue] = startValue
    //  ПОЧЕМУ НЕ РАБОАТЕТ ??? фААААААА}
    let i =props.startValue
    let buttons: Array<any> = []
    for ( i;i <= props.maxPages;i++ ) {
    buttons[i] = i}
    return (
        <div className={style.Main}>
        <div className={style.Pagination}>
            <button onClick={props.goStart}>Start</button>
            {buttons.map((b)=>{
                let goPage = props.goPage
                function Handler(){goPage(b)}
                if (b <= props.endValue) return <button onClick={Handler}>{b}</button>
            })}
            <button onClick={props.goFinish}>End</button>
        </div>
        </div>
    )
}

export default Paginator