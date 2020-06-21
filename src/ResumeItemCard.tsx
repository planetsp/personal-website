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
    Button,
    Modal,ModalBody, ModalHeader
} from 'shards-react';
import ResumeItemDetails from "./ResumeItemDetails";

interface ResumeItemCardProps {
    title: string;
    short_desc: string
    long_desc: string;
    year: number;
    tags?: Array<string>;
    image?: string;
    semester: string;
}
interface ResumeItemCardState {
    open: boolean;

}
class ResumeItemCard extends React.Component<ResumeItemCardProps, ResumeItemCardState> {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <Card className={"resumeItemCard"}>
                <CardHeader>
                    { this.props.title }
                </CardHeader>
                <CardImg src={this.props.image} className={"resumeItemCardImage"}>
                </CardImg>
                <CardTitle className={"resumeItemCardTitle"}>
                    { this.props.short_desc }
                </CardTitle>

                <CardBody>
                    { this.props.semester } { this.props.year }
                </CardBody>

                {this.props.long_desc ?
                    <div><Button onClick={this.toggle} className={"resumeItemCardButton"}>
                            Read More →
                         </Button>
                        <Modal open={this.state.open} toggle={this.toggle}>
                            <ModalHeader>{this.props.title}</ModalHeader>
                            <ModalBody><ResumeItemDetails {...this.props}/></ModalBody>
                        </Modal>
                    </div>


                    : <div></div>}

                <CardFooter>
                    { this.props.tags ? this.props.tags.map((tag:string) =>{
                            return (
                                <Badge className={"resumeItemCardTag"}>{tag}</Badge>
                            )
                        }
                    ) : <div></div> }
                </CardFooter>
            </Card>
        )
    }


}
export default ResumeItemCard