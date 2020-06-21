import React from 'react';
import {Form, FormSelect, Container, Row, Col} from 'shards-react'
import ResumeItemCard from "./ResumeItemCard";
import ResumeItem from "./models/ResumeItem";
import './ResumeViewComponent.css'
import Firebase from "firebase";
import ClipLoader from "react-spinners/ClipLoader";
import {ScaleLoader} from "react-spinners";

interface ResumeViewComponentProps {
    path: string;
}
interface ResumeViewComponentState {
    resumeItems: Array<any>;
    filteredResumeItems: Array<any>;

}
class ResumeViewComponent extends React.Component<ResumeViewComponentProps, ResumeViewComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            resumeItems: [],
            filteredResumeItems: [],
        }
        this.getCollection(this.props.path)
    }
    filterResumeItems() {

    }
    sortResumeItems(){

    }
    getCollection ( path: string) {
        let database = Firebase.firestore();
        let itemArray:Array<ResumeItem> = [];
        database.collection(path).onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                let resumeItem = doc.data() as ResumeItem
                this.setState(state => {
                    const resumeItems = [...state.resumeItems, resumeItem];
                    return {
                        resumeItems,
                    }
                    }

                )
            })
        });
        return itemArray;
    }
    render() {
        // console.log(this.state.resumeItems)
        return (
            <div>
            <Form>

            </Form>
            <Container className={'rowContainer'}>
                <Row noGutters={true} className={'rowContainer'}>
                    {
                        this.state.resumeItems.length > 0 ?
                        this.state.resumeItems.map((resumeItem: ResumeItem) =>
                            <Col sm="12" lg="4"><ResumeItemCard {...resumeItem}/></Col>) :
                            <ScaleLoader height={50}
                                         color={"blue"}
                                         css={"margin: auto; padding-top: 25%"}
                            ></ScaleLoader>
                    }
                </Row>
            </Container>
            </div>

        )
    }
}
export default ResumeViewComponent
