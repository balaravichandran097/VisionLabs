import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { EditorState, Modifier } from 'draft-js';


export class MyCustomOptions extends Component {

    constructor(props){
        super(props)

    }
    static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };
    addStar = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '⭐',
      editorState.getCurrentInlineStyle(),
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  formatJson=()=>{
    const { editorState, onChange } = this.props;
    


  }

  render() {
    return (
      <div onClick={this.addStar}>⭐</div>
    );
  }
}


export default MyCustomOptions
