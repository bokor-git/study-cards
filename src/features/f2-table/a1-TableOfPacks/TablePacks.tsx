import style from "./css.module.css";
import React, {useState} from "react";
import {PackType} from "../../../main/m2-bll/table-reduser";
import SimpleModal from "../../../main/m1-ui/common/Modal/modal";
import SimpleModalInput from "../../../main/m1-ui/common/Modal/modalInput";

type ButtonType = {
    name: string
    onClick?: (data: any, name?:any) => any

}
type columnsNamePropsType = {
    Content: Array<any>
}
type RowContentPropsType = {
    Data: Array<PackType> | null
    buttonsData: Array<ButtonType>
}
type ButtonsPropsType = {
    buttonsData: Array<ButtonType>
    id: string
}
type TablePropsType = {
    columnsName: Array<any>
    rowContent: Array<PackType> | null
    buttonsData: Array<ButtonType>
}

function Buttons(props: ButtonsPropsType) {

    let [deleteOpen, setDeleteOpen] = useState(false)
    let [update, setUpdateOpen] = useState(false)
    let [cardOpen, setCardOpenOpen] = useState(false)

    return (<div>
        {props.buttonsData.map((i) => {
            let onclick = i.onClick


            function Handler() {
                if (onclick) onclick(props.id)
            }


            switch (i.name) {
                case "Delete":
                    return (deleteOpen ?
                            <SimpleModal text={"Do you want to delete pack?"} open={deleteOpen} onButtonClick={Handler}
                                         setModalOpen={setDeleteOpen}/>
                            : <button onClick={() => setDeleteOpen(true)}>{i.name}</button>
                    )
                case "Update":

                    return (update ?
                            <SimpleModalInput text={"Do you want to update pack?"} open={update}
                                // @ts-ignore
                                              onButtonClick={(name)=>{if (onclick){i.onClick(props.id,name)}}}
                                              setModalOpen={setUpdateOpen}/>
                            : <button onClick={() => setUpdateOpen(true)}>{i.name}</button>
                    )
                case "Cards":
                    return (cardOpen ?
                            <SimpleModal text={"Do you want to open pack?"} open={cardOpen} onButtonClick={Handler}
                                         setModalOpen={setCardOpenOpen}/>
                            : <button onClick={() => setCardOpenOpen(true)}>{i.name}</button>
                    )
            }
        })}
    </div>)
}

function ColumnsName(props: columnsNamePropsType) {
    return (<div className={style.Content}>
        {props.Content.map((e: any) => {
            return <div style={{
                width: `calc(90vw/${props.Content.length})`,
                height: `calc(70vh/25)`
            }}>{e}</div>
        })}
    </div>)
}

function RowContent(props: RowContentPropsType) {
    return (<>
        {props.Data === null ? <div>Загрузка</div> :
            props.Data.map((i) => {
                return <ColumnsName
                    Content={[i.name, i.cardsCount, i.updated, "",
                        <Buttons id={i._id} buttonsData={props.buttonsData}/>]}/>
            })}
    </>)
}


function TableForPacks(props: TablePropsType) {
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


export default TableForPacks;