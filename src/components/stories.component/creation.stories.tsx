import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { stateFromHTML } from 'draft-js-import-html';
import { Container, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useParams } from 'react-router';
import { saveNewStory, updateStory } from '../../actions/storiesList';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';


const WEditor = () => {
    const storiesList = useSelector((state: any) => state.storiesReducer);
    const getInitialDataForUpdate = () => {
        console.log("early data", storiesList.opend.post_content);
        const content = stateFromHTML(storiesList.opend.post_content);
        const updatedState = EditorState.createWithContent(content);
        return updatedState;
    };
    const
        [query, setQuery] = useSearchParams();
    const [state, setState] = useState(
        query.get("id") ? getInitialDataForUpdate() : EditorState.createEmpty());
    const [title, setTitle] = useState(
        query.get("id") ? storiesList.opend.post_title : '');
    const [storyType, setStoryType] = useState(
        query.get("id") ? storiesList.opend.post_type : '')
    const params = useParams();
    const dispatch = useDispatch();
    console.log("params", params);
    console.log("query", query.get("id"));

    const onChange = (editor: any) => {
        setState(editor);
    }

    const handleSave = async () => {
        const rawContentState = convertToRaw(state.getCurrentContent());
        console.log("draftjs-html code output: -", draftToHtml(rawContentState));
        if (query.get("id")) {
            console.log("update Story")
            await updateStory(dispatch, { id: storiesList.opend._id, content: draftToHtml(rawContentState) });
        }
        else {
            await saveNewStory(dispatch, { storyType, title, content: draftToHtml(rawContentState) })
        }
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const handleStoryTypeChange = (e: SelectChangeEvent) => {
        setStoryType(e.target.value);
    }

    return (
        <div>
            <Box sx={{ minWidth: 120 }} component="form" sx={{
                '& > :not(style)': { m: 1, width: '70ch' },
            }}>

                {/* <FormControl fullWidth > */}
                {/* <InputLabel id="story-type-select-label">Story Type</InputLabel> */}

                <TextField
                    labelId="story-type-select-label"
                    id="story-type-select"
                    value={storyType}
                    label="Story Type"
                    onChange={handleStoryTypeChange}
                >
                    <MenuItem value={'USER'}>USER</MenuItem>
                    <MenuItem value={'MOTIVATIONAL'}>Motivational</MenuItem>
                    <MenuItem value={'INFORMATIVE'}>Informative</MenuItem>
                    <MenuItem value={'OTHER'}>Other</MenuItem>
                </TextField>

                <TextField className="mt-5" id="story-title" label="Title" variant="outlined" value={title} onChange={handleTitle} />
                {/* </FormControl> */}

            </Box>


            <Container>
                <Editor
                    editorStyle={{ border: "1px solid #C0C0C0", minHeight: '500px' }}
                    editorState={state}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={onChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                    }}

                >
                </Editor>
                <Box style={{float:"right" ,marginTop:"20px", marginBottom:"30px"}}>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Box>
            </Container>
        </div>
    )
}


export default WEditor;