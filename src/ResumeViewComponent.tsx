import React from 'react';
import {Card, Container, Row, Col} from 'shards-react'
import ResumeItemCard from "./ResumeItemCard";
import ResumeItem from "./models/ResumeItem";
import './ResumeViewComponent.css'
import Firebase from "firebase";
interface ResumeViewComponentProps {
    path: string;
}
interface ResumeViewComponentState {
    resumeItems: Array<any>;
}
class ResumeViewComponent extends React.Component<ResumeViewComponentProps, ResumeViewComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            resumeItems: [],
        }
        this.getCollection(this.props.path)
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
    testArray:Array<ResumeItem> = [ {
        title: 'hel',
        short_desc: 'lo',
        long_desc: 'world',
        semester: 'test',
        year: 2020,
        image: 'https://www.example.com/test.jpg',
        tags: ["hello", "world"]
    },
        {
            title: 'hel',
            short_desc: 'lo',
            long_desc: 'world',
            semester: 'test',
            year: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg',
            tags: ["hello", "world"]
        },
        {
            title: 'hel',
            short_desc: 'lo',
            long_desc: 'world',
            semester: 'test',
            year: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg',
            tags: ["hello", "world"]
        },
        {
            title: 'hel',
            short_desc: 'lo',
            long_desc: 'world',
            semester: 'test',
            year: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg',
            tags: ["hello", "world"]
        },
        {
            title: 'hel',
            short_desc: 'lo',
            long_desc: 'world',
            semester: 'test',
            year: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg',
            tags: ["hello", "world"]
        },
        {
            title: 'hel',
            short_desc: 'lo',
            long_desc: 'world',
            semester: 'test',
            year: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg',
            tags: ["hello", "world"]
        }
    ]
    render() {
        // console.log(this.state.resumeItems)
        return (
            <Container className={'rowContainer'}>
                <Row noGutters={true} className={'rowContainer'}>
                    {
                        this.state.resumeItems.map((resumeItem: ResumeItem) =>
                            <Col sm="12" lg="4"><ResumeItemCard {...resumeItem}/></Col>)
                    }
                </Row>
            </Container>

        )
    }
}
export default ResumeViewComponent
