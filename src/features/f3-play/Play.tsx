import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addCardTC,
    CardType,
    deleteCardTC,
    getCardsTC,
    gradeCardTC,
    updateCardTC
} from "../../main/m2-bll/table-reduser";
import {Redirect, useHistory, useParams} from 'react-router-dom'
import {AppRootStateType} from "../../main/m2-bll/store";
import {isInitializedTC} from "../../main/m2-bll/profile-reducer";
import {DeleteCardDataType, GradeCardDataType, UpdateCardDataType} from "../../main/m3-dal/tableApi";
import PlayCard from "./Card";
import {Link} from "@material-ui/core";
import {Preloader} from "../../main/m1-ui/common/Preloader/Preloader";
import Button from "@material-ui/core/Button";



function Play() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const history = useHistory()
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const CardsData = useSelector<AppRootStateType, Array<CardType> | null>(state => state.table.cards);

    useEffect(() => {
        checkAuth(isLoginIn)
        dispatch(getCardsTC({cardsPack_id: id}))
    }, [])


    const checkAuth = (isLoginIn: boolean) => {
        if (isLoginIn === false) {
            dispatch(isInitializedTC)
            if (isLoginIn === false) {
                return <Redirect exact to={'/login'}/>
            }
        }
    }

    const gradeButton = (data: GradeCardDataType) => {
        dispatch(gradeCardTC(data))
    }

    const [currentCardNumber, setCurrentCardNumber] = useState<number>(0)

    return <div>{

        CardsData ?
            CardsData.length > currentCardNumber ?
                <PlayCard totalCards={CardsData.length} gradeButton={gradeButton}   cardData={CardsData[currentCardNumber]} setCurrentCardNumber={setCurrentCardNumber}
                          currentCardNumber={currentCardNumber}/> : <><h1>Pack finished</h1><div><Button onClick={()=> history.push(`/Cards/${CardsData[0].cardsPack_id}`)}>Return to pack</Button></div></>
            : <><h1>Pack is empty</h1> <Preloader/></>}

    </div>

}


export default Play;