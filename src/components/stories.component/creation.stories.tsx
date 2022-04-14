import {Editor} from 'react-draft-wysiwyg';
import { convertToRaw, EditorState} from 'draft-js';
import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { Container, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useParams } from 'react-router';
import { saveNewStory } from '../../actions/storiesList';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';


const WEditor = () =>{
    const [state, setState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState(' ');
    const [storyType, setStoryType] = useState('OTHER')
    const params = useParams();
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    console.log("params", params);
    console.log("query", query.get("id"));

    const onChange = (editor:any) =>{
        setState(editor);
    }

    const handleSave = async() => {
        const rawContentState = convertToRaw(state.getCurrentContent());
        console.log("draftjs-html code output: -", draftToHtml(rawContentState));
        await saveNewStory(dispatch, {storyType, title, content:draftToHtml(rawContentState)})
    }
    
    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const handleStoryTypeChange = (e:SelectChangeEvent) => {
        setStoryType(e.target.value);
    }

    return(
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="story-type-select-label">Story Type</InputLabel>
                    <Select
                        labelId="story-type-select-label"
                        id="story-type-select"
                        value={storyType}
                        label="Age"
                        onChange={handleStoryTypeChange}
                    >
                        <MenuItem value={'USER'}>USER</MenuItem>
                        <MenuItem value={'MOTIVATIONAL'}>Motivational</MenuItem>
                        <MenuItem value={'INFORMATIVE'}>Informative</MenuItem>
                        <MenuItem value={'OTHER'}>Other</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="story-title" label="Title" variant="outlined"  onChange={handleTitle}/>
            </Box>
                
            
            <Container>
                <Editor
                    editorStyle={{ border: "1px solid #C0C0C0", minHeight: '500px'}}
                    editorState = {state}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange = {onChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                    }}
                    
                    >
                </Editor>
            <div>
            <Button variant = "contained" color = "primary" onClick = {handleSave}>
                Save
            </Button>
            </div>
        </Container>
        </div>
    )
}


export default WEditor;