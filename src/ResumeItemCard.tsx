import React from 'react';
import ResumeItem from "./models/ResumeItem";
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
    resumeItem: ResumeItem;
}
const ResumeItemCard = (props: ResumeItemCardProps) => {
    return (
        <Card>
            <CardHeader>
                { props.resumeItem.title }
            </CardHeader>
            <CardTitle>
                { props.resumeItem.short_desc }
            </CardTitle>
            <CardImg>
                { props.resumeItem.image }
            </CardImg>
            <CardBody>
                { props.resumeItem.semester } { props.resumeItem.year }
            </CardBody>

            <Button>
                Read More ->
            </Button>

            <CardFooter>
                { props.resumeItem.tags? props.resumeItem.tags.map((tag:string) =>{
                            return (
                                <Badge>{{tag}}</Badge>
                            )
                        }
                    ) : {} }
            </CardFooter>
        </Card>
    )
}
export default ResumeItemCard