import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import "./OtherSkillsSmall.css";
// import { defaultProps } from 'recompose';

const OtherSkillsSmall = (props) => (
<div>
<Card header={<CardTitle reveal image={props.image} waves='light'/>}
    title={props.title}
    reveal={<p> {props.content} </p>}>
    <p><a href={props.href}>{props.link}</a></p>
</Card>
</div>
)


export default OtherSkillsSmall;