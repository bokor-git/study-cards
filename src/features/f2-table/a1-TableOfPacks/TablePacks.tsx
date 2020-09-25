import style from "./css.module.css";
import React, {useState} from "react";
import {PackType} from "../../../main/m2-bll/table-reduser";
import SimpleModal from "../../../main/m1-ui/common/Modal/modal";
import {Button} from "@material-ui/core";
import SimpleUpdatePackInput from "../../../main/m1-ui/common/Modal/modalInput2";
import {Preloader} from "../../../main/m1-ui/common/Preloader/Preloader";

export  const buttonStyle = {margin:"5px", width: "20px",height:" 20px"}


type ButtonType = {
    name: string
    onClick?: (data: any, name?:string, rating?:number, grade?:number, deckCover?:string) => any

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

    return (<div style={{display:"flex", width: "fit-content",
        height: "fit-content"}}>
        {props.buttonsData.map((i) => {
            const onUpdateButtonClick = (name:string, rating:number, grade:number, deckCover:string)=>
            {if (i.onClick){i.onClick(props.id,name,rating, grade, deckCover)}}
            let onclick = i.onClick
            function Handler() {
                if (onclick) onclick(props.id)
            }
            switch (i.name) {
                case "Delete":
                    return (deleteOpen ?
                            <SimpleModal text={"Do you want to delete pack?"}
                                         open={deleteOpen}
                                         onButtonClick={Handler}
                                         setModalOpen={setDeleteOpen}/>
                            : <Button size={"small"}
                                      style={buttonStyle}
                                      variant="contained" color="primary"
                                      onClick={() => setDeleteOpen(true)}>{i.name}</Button>
                    )
                case "Update":
                    return (update ?
                            <SimpleUpdatePackInput text={"Do you want to update pack?"} open={update}
                                              onButtonClick={onUpdateButtonClick}
                                              setModalOpen={setUpdateOpen}/>
                            : <Button size={"small"}
                                      style={buttonStyle}
                                      variant="contained" color="primary"
                                      onClick={() => setUpdateOpen(true)}>{i.name}</Button>
                    )
                case "Cards":
                    return (<Button size={"small"}
                                    style={buttonStyle}
                                    variant="contained" color="primary"
                                    onClick={Handler}>{i.name}</Button>)
                case "Play":
                    return (<Button size={"small"}
                                    style={buttonStyle}
                                    variant="contained" color="primary"
                                    onClick={Handler}>{i.name}</Button>)
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
    return (<div className={style.rowContent}>
        {props.Data === null ? <Preloader/> :
            props.Data.map((i) => {
                return <ColumnsName
                    Content={[i.name, i.cardsCount, i.updated, i.grade,
                        <Buttons id={i._id} buttonsData={props.buttonsData}/>]}/>
            })}
    </div>)
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