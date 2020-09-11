import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function SimpleModal({open, setModalOpen, onButtonClick}:{open:boolean, setModalOpen:(value:boolean)=>void, onButtonClick:()=>void}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const onClick = ()=>{onButtonClick();setModalOpen(false)}
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Do you want to add new pack?</h2>
            <p id="simple-modal-description">

            </p>
            <button type="button" onClick={onClick}>
                Yes
            </button>
        </div>
    );

    return (
        <div>

            <Modal
                open={open}
                onClose={()=>setModalOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}