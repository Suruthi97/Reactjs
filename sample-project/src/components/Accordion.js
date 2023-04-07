import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.scss';

function AccordionContainer(props) {
    return (
        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign: 'left' }}>{props.summary}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{props.subSummary}</Typography>
                    
                    </AccordionSummary>
                <AccordionDetails>
                            {props.children}                
                    </AccordionDetails>
            </Accordion>
    );
}
export default AccordionContainer;