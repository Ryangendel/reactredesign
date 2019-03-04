import React from 'react';
import { Collection, CollectionItem, Card, CardTitle } from 'react-materialize';
import "./OtherSkillsCards.css";
import { defaultProps } from 'recompose';

const OtherSkillsCards = (props) => (
<div>
<Collection header='Special Committies'>
<CollectionItem>{props.item1}</CollectionItem>
<CollectionItem>{props.item2} </CollectionItem>
<CollectionItem>{props.item3}</CollectionItem>
<CollectionItem>{props.item4}</CollectionItem>
</Collection>
</div>
)


export default OtherSkillsCards;
