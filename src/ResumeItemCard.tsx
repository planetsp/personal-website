import React from 'react';
import ResumeItem from "./models/ResumeItem";
import './ResumeItemCard.css';

import {
    Badge,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from 'shards-react';

interface ResumeItemCardProps {
    title: string;
    short_desc: string
    long_desc: string;
    year: number;
    tags?: Array<string>;
    image?: string;
    semester: string;
}
const ResumeItemCard = (props: ResumeItemCardProps) => {
    return (
        <Card className={"resumeItemCard"}>
            <CardHeader>
                { props.title }
            </CardHeader>
            <CardImg src={props.image} className={"resumeItemCardImage"}>
            </CardImg>
            <CardTitle className={"resumeItemCardTitle"}>
                { props.short_desc }
            </CardTitle>

            <CardBody>
                { props.semester } { props.year }
            </CardBody>

            <Button className={"resumeItemCardButton"}>
                Read More ->
            </Button>

            <CardFooter>
                { props.tags? props.tags.forEach((tag:string) =>{
                            return (
                                <Badge>{{tag}}</Badge>
                            )
                        }
                    ) : <div></div> }
            </CardFooter>
        </Card>
    )
}
export default ResumeItemCard