import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage=()=>{
    return(
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButtonContainer/>
        </Responsive>
    );
};

export default WritePage; 