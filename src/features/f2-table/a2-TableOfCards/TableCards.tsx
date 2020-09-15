import style from "./css.module.css";
import React, {useState} from "react";
import {CardType, PackType} from "../../../main/m2-bll/table-reduser";
import SimpleModal from "../../../main/m1-ui/common/Modal/modal";
import SimpleModalInput from "../../../main/m1-ui/common/Modal/modalInput";

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
    let [deleteOpen, setDeleteOpen] = useState(false)
    let [update, setUpdateOpen] = useState(false)
    return (
        <div>
            {props.buttonsData.map((i) => {
                let onclick = i.onClick
                let Handler = (question?:string) => {}
                switch (i.name) {
                    case "Delete":
                        Handler = () => {if (onclick) onclick({cardId: props.cardId,packId: props.PackId})}
                        return (<>
                                <SimpleModal text={"Do you want to delete pack?"} open={deleteOpen} onButtonClick={Handler} setModalOpen={setDeleteOpen}/>
                                 <button onClick={() => setDeleteOpen(true)}>{i.name}</button>
                                </>
                        )
                    case "Update":
                        Handler = (question?:string) => {if (onclick) onclick({card: {_id:props.cardId, question:question},packId:props.PackId})}
                        return (<>
                                <SimpleModalInput text={"Do you want to update pack?"} open={update} onButtonClick={Handler} setModalOpen={setUpdateOpen}/>
                                <button onClick={() => setUpdateOpen(true)}>{i.name}</button>
                                </>
                        )
                }
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
