import React from "react";
import {styled} from "@mui/material/styles";
import {IconButton, IconButtonProps} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled(
    ({  expand, ...other }: ExpandMoreProps) => <IconButton {...other} />
)(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

type ExpandMoreActionProps = {
    expanded: boolean,
    handleExpandClick: React.MouseEventHandler<HTMLButtonElement>,
    label?: string,
}

const ExpandMoreAction: React.FC<ExpandMoreActionProps> = ({ expanded, handleExpandClick, label = "Ver descrição" }: ExpandMoreActionProps) => {
    return (
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={label}
        >
            <ExpandMoreIcon />
        </ExpandMore>
    );
}

export { ExpandMoreAction };