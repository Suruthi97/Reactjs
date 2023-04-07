import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../App.scss';

function CardContainer(props) {
    return (
        <Card>
            <CardContent className={`cardContainer ${props.className}`}>
                {props.children}
            </CardContent>
        </Card>
    );
}
export default CardContainer;