import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {CardType} from "../../main/m2-bll/table-reduser";
import {GradeCardDataType} from "../../main/m3-dal/tableApi";
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 500,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

type PlayCardPropsType = {
    cardData: CardType | undefined
    setCurrentCardNumber: (currentCardNumber: number) => void
    currentCardNumber: number
    gradeButton: (data: GradeCardDataType) => void
}


export default function PlayCard({cardData, setCurrentCardNumber, currentCardNumber, gradeButton}: PlayCardPropsType) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const onGradeButtonPush = (grade: number) => {
        if (cardData)
            gradeButton({
                grade: grade,
                card_id: cardData._id
            })
        setCurrentCardNumber(currentCardNumber + 1)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={<Rating name="half-rating-read-small" defaultValue={cardData?.rating} precision={0.1} readOnly/>
                }
                subheader={cardData?.created}
            />
            <h3>Grade: {cardData?.grade}</h3>
            <CardMedia
                className={classes.media}
                image="https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png"
                title="Paella dish"
            />
            <CardContent>
                    <h1>{cardData?.question}</h1>
            </CardContent>
            <Typography variant="body2" color="textSecondary" component="h3">
                <h3>Grade:</h3>
            </Typography>
            <ButtonGroup variant="contained" size={"small"} color="primary"
                         aria-label="contained primary button group">
                <Button onClick={() => onGradeButtonPush(1)}>One</Button>
                <Button onClick={() => onGradeButtonPush(2)}>Two</Button>
                <Button onClick={() => onGradeButtonPush(3)}>Three</Button>
                <Button onClick={() => onGradeButtonPush(4)}>Four</Button>
                <Button onClick={() => onGradeButtonPush(5)}>Five</Button>
            </ButtonGroup>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    title={"Show Answer"}
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Answer:</Typography>
                    <Typography paragraph>
                        {cardData?.answer}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>)
}