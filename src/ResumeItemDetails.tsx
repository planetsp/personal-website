import React from 'react';
import './ResumeItemCard.css';
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
            <h4>{props.semester} {props.year}</h4>
            <h3>{props.short_desc}</h3>
            <p className={'resumeItemDetails'}>{props.long_desc}</p>
            <footer></footer>
        </div>
    )
}
export default ResumeItemDetails