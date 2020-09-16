import style from "./css.module.css";
import React, {useState} from "react";
import {CardType} from "../../../main/m2-bll/table-reduser";
import SimpleModal from "../../../main/m1-ui/common/Modal/modal";
import SimpleModalInput from "../../../main/m1-ui/common/Modal/modalInput";
import SimpleModalGrade from "../../../main/m1-ui/common/Modal/modalGrade";
import {Button} from "@material-ui/core";

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
    let [grade, setGradeOpen] = useState(false)
    return (
        <div style={{display:"flex"}}>
            {props.buttonsData.map((i) => {
                let onclick = i.onClick
                switch (i.name) {
                    case "Delete":
                       const DeleteHandler = () => {if (onclick) onclick({cardId: props.cardId,packId: props.PackId})}
                        return (<>
                                <SimpleModal text={"Do you want to delete pack?"} open={deleteOpen} onButtonClick={DeleteHandler} setModalOpen={setDeleteOpen}/>
                                 <Button size={"small"} style={{margin:"5px", width: "20px",height:" 20px"}} variant="contained" color="primary" onClick={() => setDeleteOpen(true)}>{i.name}</Button>
                                </>
                        )
                    case "Update":
                       const UpdateHandler = (question?:string, comment?:string) => {if (onclick) onclick({card: {_id:props.cardId, question:question, comment},packId:props.PackId})}
                        return (<>
                                <SimpleModalInput text={"Do you want to update pack?"} open={update} onButtonClick={UpdateHandler} setModalOpen={setUpdateOpen}/>
                                <Button size={"small"} style={{margin:"5px", width: "20px",height:" 20px"}} variant="contained" color="primary" onClick={() => setUpdateOpen(true)}>{i.name}</Button>
                                </>
                        )
                    // case "Grade":
                    //     const GradeHandler = (rating:number) => { if (onclick) onclick({card_id:props.cardId, grade:grade})}
                    //
                    //     return (<>
                    //             <SimpleModalGrade text={"Rating"} open={grade} onButtonClick={GradeHandler} setModalOpen={setGradeOpen}/>
                    //             <Button size={"small"} style={{margin:"5px", width: "20px",height:" 20px"}} variant="contained" color="primary" onClick={() => setGradeOpen(true)}>{i.name}</Button>
                    //         </>
                    //     )
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
                    Content={[i.question, i.answer, i.grade, i.updated,i.shots,
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
