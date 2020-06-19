import React from 'react';
import {Card, Container, Row, Col} from 'shards-react'
import ResumeItemCard from "./ResumeItemCard";
import ResumeItem from "./models/ResumeItem";
interface ResumeViewComponentProps {
    resumeItems: Array<any>;
}

const ResumeViewComponent = (props: ResumeViewComponentProps) => {
    console.log(props.resumeItems)
    let testArray:Array<ResumeItem> = [ {
        title: 'hel',
        short_desc: 'lo',
        long_desc: 'world',
        semester: 'test',
        year: 2020,
        image: 'https://www.example.com/test.jpg'
    }]
    return (
        <Container>
            {
                testArray.map((resumeItem:ResumeItem) =>
                    <ResumeItemCard resumeItem={resumeItem}/>
                )
            }
        </Container>

    )
}
export default ResumeViewComponent
