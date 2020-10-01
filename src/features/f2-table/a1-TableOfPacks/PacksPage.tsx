import React, {useEffect, useState} from "react";
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
import SimpleModalInput from "../../../main/m1-ui/common/Modal/modalInput";
import {Button} from "@material-ui/core";
import {Preloader} from "../../../main/m1-ui/common/Preloader/Preloader";


function PackPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.table.isLoading)
    const PacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.allPacks);
    const paginatorData = useSelector<AppRootStateType, PaginatorType>(state => state.table.paginator);
    const [valueSearch,setValueSearch] = useState<string>("")
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
    }, [paginatorData])
    const playButton = (id: string) => {
        history.push(`/play/${id}`)
    }

    const addButton = (name: string) => {
        dispatch(addPackTC({cardsPack: {name: name}}, paginatorData.currentPage))
    }
    const deleteButton = (id: string) => {
        dispatch(deletePackTC(id, paginatorData.currentPage))
    }
    const updateButton = (id: string, name?: string, rating: number = 0, grade: number = 0, deckCover: string = "") => {
        dispatch(updatePackTC({cardsPack: {_id: id, name: name, rating: rating}}, paginatorData.currentPage))
    }
    const cardsButton = (id: string) => {
        history.push(`/Cards/${id}`)
    }
    const goStart = () => {
        dispatch(setCurrentPagerAC(1))
        dispatch(setStartPagePaginatorAC(1))
        dispatch(setEndPagePaginatorAC(5))
        dispatch(getPacksTC(1))
    }
    const goFinish = () => {
        dispatch(setCurrentPagerAC(maxPages))
        dispatch(getPacksTC(paginatorData.currentPage))
        dispatch(setStartPagePaginatorAC(maxPages - 4))
        dispatch(setEndPagePaginatorAC(maxPages))
    }
    const searchChangeValue = (e:any) => {
        setValueSearch(e.currentTarget.value)
    }
    const goSearch = (e:any) => {
        dispatch(getPacksTC(1))
    }
    const goPage = (value: number) => {
        if (value === paginatorData.endPage) {
            if(value === maxPages) {dispatch(getPacksTC(value))
                return}
            dispatch(setStartPagePaginatorAC(value))
            dispatch(setEndPagePaginatorAC(value + 4))
            dispatch(setCurrentPagerAC(value))
            dispatch(getPacksTC(value))
            return
        } else if (value === paginatorData.startPage) {
            if(value === 1) {dispatch(getPacksTC(value))
                return}
            dispatch(setStartPagePaginatorAC(value - 4))
            dispatch(setEndPagePaginatorAC(value))
            dispatch(setCurrentPagerAC(value))
            dispatch(getPacksTC(value))
            return
        }
        dispatch(getPacksTC(value))
    }
    let [addOpen, setAddModalOpen] = useState(false)
    return (<div className={style.Main}>
            {!PacksData && isLoading ? <Preloader/> :
                <>
                    <SimpleModalInput text={"Do you want to create new pack?"}
                                      open={addOpen}
                                      onButtonClick={addButton}
                                      setModalOpen={setAddModalOpen}/>
                    <div className={style.SearchPanel}>
                        <div><input value={valueSearch} onChange={searchChangeValue}/><button>Search</button></div>
                        <div>My Packs<input type="checkbox"/></div>
                        <div>RangeBar</div>
                    </div>

                    <TableForPacks
                        columnsName={["Name", "Cards quantity", "Last update", "Grade",
                            <Button size={"small"}
                                    style={{margin: "5px", height: " 20px"}}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setAddModalOpen(true)}>Add new pack</Button>]}
                        rowContent={PacksData}
                        buttonsData={[
                            {name: "Update", onClick: updateButton},
                            {name: "Delete", onClick: deleteButton},
                            {name: "Cards", onClick: cardsButton},
                            {name: "Play", onClick: playButton},]}/>
                    <Paginator maxPages={maxPages}
                               endValue={paginatorData.endPage}
                               startValue={paginatorData.startPage}
                               goFinish={goFinish}
                               goPage={goPage}
                               goStart={goStart}/>
                </>
            }

            <ErrorSnackbar/>
        </div>

    )
}


export default PackPage;