import style from "./css.module.css";
import React from "react";
import {CardType, PackType} from "../../../main/m2-bll/table-reduser";



type ButtonType = {
    name: string
    onClick?: (data:any) => any
}

type ButtonsPropsType = {
    buttonsData: Array<ButtonType>
    cardId: string
    PackId: string
}

function Buttons(props: ButtonsPropsType) {
    return (
        <div>
            {props.buttonsData.map((i) => {
                let onclick = i.onClick
                let Handler = () => {}
                if (i.name === "Delete"){ Handler = () => {if (onclick) onclick({cardId: props.cardId,packId: props.PackId})}}
                else {Handler = () => {if (onclick) onclick({
                    card: {_id:props.cardId},packId:props.PackId})}}
                return <button onClick={Handler}>{i.name}</button>
            })}
        </div>)
}
type columnsNamePropsType = {
    Content: Array<any>
}

function ColumnsName(props: columnsNamePropsType) {
    return (<div className={style.Content}>
        {props.Content.map((i: any) => {
            return <div style={{width:`calc(90vw/${props.Content.length})`}}>{i}</div>
        })}
    </div>)
}

type RowContentPropsType = {
    Data: Array<CardType> | null
    buttonsData: any
}
function RowContent(props: RowContentPropsType) {
    return (<>
        {props.Data === null ? <div>Загрузка</div> :
            props.Data.map((i) => {
                return <ColumnsName
                    Content={[i.question, i.answer, i.grade, i.updated,"url",
                        <Buttons cardId={i._id} PackId={i.cardsPack_id} buttonsData={props.buttonsData}/>]}/>
            })}
    </>)
}


type TablePropsType = {
    columnsName: Array<any>
    rowContent: Array<CardType> | null
    buttonsData: Array<ButtonType>
}
function TableForCards(props: TablePropsType) {
    return (
        <div className={style.Table}>
            <div className={style.HeaderTable}>
                <ColumnsName Content={props.columnsName}/>
            </div>
            <div className={style.ContentTable}>
                <RowContent Data={props.rowContent} buttonsData={props.buttonsData}/>
            </div>
        </div>

    )
}


export default TableForCards;
