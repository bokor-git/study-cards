import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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

export default function SimpleModalInput({text, open, setModalOpen, onButtonClick}: { text: string, open: boolean, setModalOpen: (value: boolean) => void, onButtonClick: (question: string, coment:string) => void }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const confirm = (data: any) => {
        setModalOpen(false);
        onButtonClick(question,comment)
        setQuestion("")
        setComment("")
    }
    const cancel = () => {
        setModalOpen(false)
    }
    let [question, setQuestion] = useState<string>("")
    let [comment, setComment] = useState<string>("")
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{text}</h2>
            <p id="simple-modal-description">Question:</p>
            <TextField value={question} name={"Name"} onChange={(event) => setQuestion(event.currentTarget.value)}/>
            <p id="simple-modal-description">Comment:</p>
            <TextField value={comment} name={"Name"} onChange={(event) => setComment(event.currentTarget.value)}/>

            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Button size={"small"} style={{margin: "5px", height: " 20px"}} variant="contained" color="primary"
                        onClick={confirm}>
                    Confirm
                </Button>
                <Button size={"small"} style={{margin: "5px", height: " 20px"}} variant="contained" color="primary"
                        onClick={cancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );

    return (
        <div>

            <Modal
                open={open}
                onClose={() => setModalOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}