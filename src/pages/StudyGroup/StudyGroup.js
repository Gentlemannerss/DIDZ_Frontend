import React from 'react';
import './StudyGroup.css';
import Product from "../../components/Product/Product";

function StudyGroup() {
    return (
        <div className="studyContainer">
            <Product /> {/*todo geeft product mee*/}
            <p>Test StudyGroup</p>
        </div>
    );
}

export default StudyGroup;