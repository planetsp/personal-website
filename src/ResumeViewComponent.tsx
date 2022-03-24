import React from 'react';
import {Form, Container, Row, Col} from 'shards-react'
import ResumeItemCard from "./ResumeItemCard";
import ResumeItem from "./models/ResumeItem";
import './ResumeViewComponent.css'
import {ScaleLoader} from "react-spinners";
import { FirebaseApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';

interface ResumeViewComponentProps {
    app: FirebaseApp;
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
        this.getCollection(this.props.app, this.props.path)
    }
    filterResumeItems() {

    }
    sortResumeItems(){

    }
    async getCollection ( app: FirebaseApp, path: string) {
        const db = getFirestore(app);

        let itemArray:Array<ResumeItem> = [];
        const q = query(collection(db, path));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          let resumeItem = doc.data() as ResumeItem
            this.setState(state => {
                const resumeItems = [...state.resumeItems, resumeItem];
                return {
                    resumeItems,
                }
                }

            )
        });

        return itemArray;
    }
    render() {
        return (
            <div>
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
