import React, { Component } from 'react';
import { EditorState, RichUtils,
    convertToRaw,
    convertFromRaw, Modifier} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MyCustomOptions from './MyCustomOptions';
//import MyCustomOptions from './MyCustomOptions';




export default class EditLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor:false,  
      editorState:EditorState.createEmpty(),
    };
  }
 
   componentDidMount(){
      
       this.setState({
           showEditor:true,
       })
   }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };



  render() {
    const {showEditor,editorState } = this.state;

    return (
        <>
      <div>
        {showEditor ? (
        <Editor
        toolbar={{
            options: ['fontSize', 'list', 'textAlign'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
        }}
        toolbarCustomButtons={[<MyCustomOptions />]}
                 editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="You can Format your JSON here.."
        />):null}
      
      </div>
      </>
    );
  }

  
}

const initialData = {
    blocks: [
      {
        key: '16d0k',
        text: 'You can Format Here',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
        entityRanges: [],
        data: {},
      },
      {
        key: '98peq',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
     
      {
        key: 'fe2gn',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
     
    ],
    entityMap: {},
  }
  
     
  