import React from 'react';
import MessageBoardComponent from "../../components/MessageBoard/MessageBoardComponent";
import { useParams } from 'react-router';

function MessageBoard() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <MessageBoardComponent studyGroupId={id}/>
        </div>
    );
}

export default MessageBoard;