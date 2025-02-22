import {Chip as MUIChip} from "@mui/material";


interface IProps{
    text: string;
    onClick?: () => void;
    onDelete?: () => void;
}

export default function Chip(props: IProps)
{
    const { text, onClick, onDelete } = props;

    return <MUIChip
        variant="outlined"
        label={text}
        onClick={onClick}
        onDelete={onDelete}
        sx={{ color: "#1A9957", borderColor: "#103722", fontWeight: 600, borderRadius: 3,'& span': { px: 2} }}
    />;

}