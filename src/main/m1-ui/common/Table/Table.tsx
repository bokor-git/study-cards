import style from "./css.module.css";
import React from "react";
import {PackType} from "../../../m2-bll/table-reduser";

type ButtonType = {
    name: string
    onClick?: (data:any) => any
}
type columnsNamePropsType = {
    Content: Array<any>
}
type RowContentPropsType = {
    PacksData: Array<PackType> | null
    buttonsData: Array<ButtonType>
}
type TablePropsType = {
    columnsName: Array<any>
    rowContent: Array<PackType> | null
    buttonsData: Array<ButtonType>
}
type ButtonsPropsType = {
    buttonsData: Array<ButtonType>
    id: string
}

function Buttons(props: ButtonsPropsType) {
    return (
        <div>
            {props.buttonsData.map((i) => {
                let onclick = i.onClick
                function Handler(){if (onclick) onclick(props.id)}
                return <button onClick={Handler}>{i.name}</button>
            })}
        </div>)
}

function ColumnsName(props: columnsNamePropsType) {
    return (<div className={style.Content}>
        {props.Content.map((e: string | number) => {
            return <div className={style.rowItem}>{e}</div>
        })}
    </div>)
}

function RowContent(props: RowContentPropsType) {
    return (<>
        {props.PacksData === null ? <div>Загрузка</div> :
            props.PacksData.map((i) => {
                return <ColumnsName
                    Content={[i.name, i.cardsCount, i.updated, "", <Buttons id={i._id} buttonsData={props.buttonsData}/>]}/>
            })}
    </>)
}


function NewTable(props: TablePropsType) {
    return (
        <div className={style.Table}>
            <div className={style.HeaderTable}>
                <ColumnsName Content={props.columnsName}/>
            </div>
            <div className={style.ContentTable}>
                <RowContent PacksData={props.rowContent} buttonsData={props.buttonsData}/>
            </div>
        </div>
    )
}


export default NewTable;