import React, { Component, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


// class ControlledEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <Editor
//         initialEditorState={editorState}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={this.onEditorStateChange}
//       />
//     )
//   }
// }
// import React from 'react'

const ControlledEditor = () => {
    const [editorState,setEditorState]=useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState)=>{
        setEditorState({editorState})
    }
  return (
    <Editor
        initialEditorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
  )
}

// export default RichTextEditor


export default ControlledEditor