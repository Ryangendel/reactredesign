import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import MediaQuery from 'react-responsive';
import "./WebDevCards.css";
import { defaultProps } from 'recompose';

const WebDevCards = (props) => (
<div>
<Card style={{ height: '280px', width:"100%", paddingtop:"10px"}} header={<CardTitle reveal style={{padding:"5%"}} image={props.picture} waves='light'/>}
title= {<p className="titleCardsWeb">{props.title}</p>}
reveal={<p>{props.explaination}</p>}>
<p><a className="links" href={props.link}>Live</a></p>
<p><a className="links" href={props.github}>Repo</a></p>
</Card>

</div>
)


export default WebDevCards;
