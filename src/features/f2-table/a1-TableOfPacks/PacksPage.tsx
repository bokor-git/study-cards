import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {isInitializedTC} from "../../../main/m2-bll/profile-reducer";
import {Redirect} from "react-router-dom";
import {
    addPackTC,
    deletePackTC,
    getCardsTC,
    getPacksTC,
    PackType,
    updatePackTC
} from "../../../main/m2-bll/table-reduser";
import {ErrorSnackbar} from "../../../main/m1-ui/common/ErrorSnackbar/ErrorSnackbar";
import NewTable from "../../../main/m1-ui/common/Table/Table";
import { useHistory } from 'react-router-dom';
import TableForPacks from "./TablePacks";


function PackPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const PacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.packs);

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
        dispatch(getPacksTC())
    }, [])

    const addButton = () => {
        dispatch(addPackTC({cardsPack: {}}))
    }
    const deleteButton = (id: string) => {
        dispatch(deletePackTC(id))
    }
    const updateButton = (id: string) => {
        dispatch(updatePackTC({cardsPack: {_id: id}}))
    }
    const cardsButton = (id: string) => {
        history.push(`/Cards/${id}`)
        // dispatch(getCardsTC({cardsPack_id:id}))
    }
    return (<div>
            {!PacksData ? <div>Загрузка</div> :
                <TableForPacks
                    columnsName={["Name", "cardsCount", "Updated", "Url", <button onClick={addButton}>Add</button>]}
                    rowContent={PacksData}
                    buttonsData={[
                        {name: "Update", onClick: updateButton},
                        {name: "Delete", onClick: deleteButton},
                        {name: "Cards", onClick: cardsButton},]}/>}

            <ErrorSnackbar/>
        </div>

    )
}


export default PackPage;