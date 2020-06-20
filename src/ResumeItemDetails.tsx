import React from 'react';
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
interface ResumeItemDetailsProps {
    title: string;
    short_desc: string
    long_desc: string;
    year: number;
    tags?: Array<string>;
    image?: string;
    semester: string;
}
const ResumeItemDetails = (props: ResumeItemDetailsProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.semester} {props.year}</h4>
            <h3>{props.short_desc}</h3>
            <p>{props.long_desc}</p>
            <footer></footer>
        </div>
    )
}
export default ResumeItemDetails