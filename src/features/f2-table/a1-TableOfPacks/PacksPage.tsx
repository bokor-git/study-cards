import React, {useEffect} from "react";
import style from "./css.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {isInitializedTC} from "../../../main/m2-bll/profile-reducer";
import {Redirect, useHistory} from "react-router-dom";
import {
    addPackTC,
    deletePackTC,
    getPacksTC,
    PackType,
    PaginatorType,
    setCurrentPagerAC, setEndPagePaginatorAC, setStartPagePaginatorAC,
    updatePackTC
} from "../../../main/m2-bll/table-reduser";
import {ErrorSnackbar} from "../../../main/m1-ui/common/ErrorSnackbar/ErrorSnackbar";
import TableForPacks from "./TablePacks";
import Paginator from "../../../main/m1-ui/common/Paginator/Paginator";


function PackPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const PacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.packs);
    const paginatorData = useSelector<AppRootStateType, PaginatorType>(state => state.table.paginator);
    let maxPages = Math.ceil(paginatorData.packsCount / 25)
    const checkAuth = (isLoginIn: boolean) => {
        if (isLoginIn === false) {
            dispatch(isInitializedTC)
            if (isLoginIn === false) {
                return <Redirect exact to={'/login'}/>
            }
        }
    }


    useEffect(() => {
        checkAuth(isLoginIn)
        dispatch(getPacksTC(paginatorData.currentPage))
    }, [])

    const addButton = () => {
        dispatch(addPackTC({cardsPack: {}}, paginatorData.currentPage))
    }
    const deleteButton = (id: string) => {
        dispatch(deletePackTC(id, paginatorData.currentPage))
    }
    const updateButton = (id: string) => {
        dispatch(updatePackTC({cardsPack: {_id: id}}, paginatorData.currentPage))
    }
    const cardsButton = (id: string) => {
        history.push(`/Cards/${id}`)
    }
    const goStart = () => {
        dispatch(setCurrentPagerAC(1))
        setStartPagePaginatorAC(1)
        setEndPagePaginatorAC(5)
        dispatch(getPacksTC(paginatorData.currentPage))
    }
    const goFinish = () => {
        dispatch(setCurrentPagerAC(maxPages))
        dispatch(getPacksTC(paginatorData.currentPage))
        setStartPagePaginatorAC(maxPages-4)
        setEndPagePaginatorAC(maxPages)
    }
    const goPage = (value: number) => {
        debugger
        if(value === paginatorData.endPage){
            dispatch(setStartPagePaginatorAC(value))
            dispatch(setEndPagePaginatorAC(value+4))
            dispatch(setCurrentPagerAC(value))
            dispatch(getPacksTC(paginatorData.currentPage))
            return
        }
        else if(value === paginatorData.startPage){
            dispatch(setStartPagePaginatorAC(value-4))
            dispatch(setEndPagePaginatorAC(value))
            dispatch(setCurrentPagerAC(value))
            dispatch(getPacksTC(paginatorData.currentPage))
            return
        }

    }
    return (<div className={style.Main}>
            {!PacksData ? <div>Загрузка</div> :
                <>
                    <Paginator maxPages={maxPages}
                               endValue={paginatorData.endPage}
                               startValue={paginatorData.startPage}
                               goFinish={goFinish}
                               goPage={goPage}
                               goStart={goStart}/>
                    <TableForPacks
                        columnsName={["Name", "cardsCount", "Updated", "Url", <button onClick={addButton}>Add</button>]}
                        rowContent={PacksData}
                        buttonsData={[
                            {name: "Update", onClick: updateButton},
                            {name: "Delete", onClick: deleteButton},
                            {name: "Cards", onClick: cardsButton},]}/>
                </>}

            <ErrorSnackbar/>
        </div>

    )
}


export default PackPage;