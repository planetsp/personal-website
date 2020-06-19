import React from 'react';
import {Container, Row, Col} from 'shards-react'
import ResumeItemCard from "./ResumeItemCard";
import ResumeItem from "./models/ResumeItem";
interface ResumeViewComponentProps {
    page: string;
}

const ResumeViewComponent = (props: ResumeViewComponentProps) => {
    let resumeItems = []
    let getResumeItems = () => {
    //    get requests

    }
    return (
        <Container>
            { resumeItems.map((resumeItem) => {
                return (
                    <Row>
                        <ResumeItemCard resumeItem = {resumeItem}></ResumeItemCard>
                    </Row>
                )
                })
            }
        </Container>
    )
}
export default ResumeViewComponent
