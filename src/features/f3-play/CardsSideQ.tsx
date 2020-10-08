import React, {useState} from "react";
import style from "./css.module.css"
import {CardsType, CardType} from "../../main/m2-bll/table-reduser";
import {Star} from "@material-ui/icons";
import {StarRead} from "../../main/m1-ui/common/Star/Star";

type CardsSideQPropsType ={
    currentCard : NewCardType | any
}
type NewCardType = {
    number:number
    question:string
    answer:string
    grade:number
}


export const CardsSideQ = (props:CardsSideQPropsType) => {
    return (<div className={style.cardPack}>
        {props.currentCard ?<>
            <div><StarRead value={props.currentCard.grade}/></div>
            <div>Question:</div>
            <div>{props.currentCard.question}</div>
        </> : <></>}

            </div>)
}