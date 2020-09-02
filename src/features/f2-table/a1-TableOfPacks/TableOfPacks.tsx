import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {isInitializedTC} from "../../../main/m2-bll/profile-reducer";
import {Redirect} from "react-router-dom";
import {addPackTC, deletePackTC, getPacksTC, PackType, updatePackTC} from "../../../main/m2-bll/table-reduser";
import {ErrorSnackbar} from "../../../main/m1-ui/common/ErrorSnackbar/ErrorSnackbar";
import NewTable from "../../../main/m1-ui/common/Table/Table";


function TableOfPacks() {
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

    function deleteButton(id: string) {
        dispatch(deletePackTC(id))
    }

    const updateButton = (id:string) => {
        dispatch(updatePackTC({cardsPack: {_id:id}}))
    }
    return (<div>
            {!PacksData ? <div>Загрузка</div> :
                <NewTable
                    columnsName={["Name", "cardsCount", "Updated", "Url", <button onClick={addButton}>Add</button>]}
                    rowContent={PacksData}
                    buttonsData={[
                        {name: "Add",},
                        {name: "Update", onClick:updateButton},
                        {name: "Delete", onClick: deleteButton}]}/>}
            <ErrorSnackbar/>
        </div>

    )
}


export default TableOfPacks;