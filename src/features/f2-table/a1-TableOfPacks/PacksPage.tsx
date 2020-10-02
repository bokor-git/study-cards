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
    PaginatorType, searchPacksTC,
    setCurrentPagerAC, setEndPagePaginatorAC, setStartPagePaginatorAC,
    updatePackTC
} from "../../../main/m2-bll/table-reduser";
import {ErrorSnackbar} from "../../../main/m1-ui/common/ErrorSnackbar/ErrorSnackbar";
import TableForPacks from "./TablePacks";
import Paginator from "../../../main/m1-ui/common/Paginator/Paginator";
import SimpleModalInput from "../../../main/m1-ui/common/Modal/modalInput";
import {Button} from "@material-ui/core";
import {Preloader} from "../../../main/m1-ui/common/Preloader/Preloader";
import {userDate} from "../../../main/m2-bll/login-reducer";


function PackPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.table.isLoading)
    const PacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.allPacks);
    const myPacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.myPacks);
    const paginatorData = useSelector<AppRootStateType, PaginatorType>(state => state.table.paginator);
    const [valueSearch, setValueSearch] = useState<string>("")
    const {_id} = useSelector<AppRootStateType, userDate>(state => state.auth.UserData);
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
        dispatch(getPacksTC("", "", 1000))
    }, [])
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
        dispatch(setEndPagePaginatorAC(maxPages))
    }
    const goFinish = () => {
        dispatch(setCurrentPagerAC(maxPages))
        if (maxPages < 5) return
        dispatch(setStartPagePaginatorAC(maxPages - 4))
        dispatch(setEndPagePaginatorAC(maxPages))
    }
    const searchChangeValue = (e: any) => {
        setValueSearch(e.currentTarget.value)
    }
    const goSearch = (e: any) => {
        dispatch(searchPacksTC(valueSearch))
    }
    const goPage = (value: number) => {
        if (value === paginatorData.endPage) {
            if (value === maxPages) {
                dispatch(setCurrentPagerAC(value))
                return
            }
            dispatch(setStartPagePaginatorAC(value))
            dispatch(setEndPagePaginatorAC(value + 4))
            dispatch(setCurrentPagerAC(value))
            return
        } else if (value === paginatorData.startPage) {
            if (value === 1) {
                dispatch(setCurrentPagerAC(value))
                return
            }
            dispatch(setStartPagePaginatorAC(value - 4))
            dispatch(setEndPagePaginatorAC(value))
            dispatch(setCurrentPagerAC(value))
            return
        }
        dispatch(setCurrentPagerAC(value))
    }
    const getAllPacks = () => {
        dispatch(getPacksTC("", "", 1000))
        setValueSearch("")
    }
    const getMyPacks = (e: any) => {
        if (e.currentTarget.checked) dispatch(getPacksTC("", _id, 1000))
        else dispatch(getPacksTC("", "", 1000))

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
                        <button onClick={getAllPacks}>All Packs</button>
                        <div><input value={valueSearch} onChange={searchChangeValue}/>
                            <button onClick={goSearch}>Search</button>
                        </div>
                        <div>My Packs<input type="checkbox" onChange={getMyPacks}/></div>
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
                            {name: "Play", onClick: playButton},]}
                        rowsCount={22}
                        currentPage={paginatorData.currentPage}/>
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