import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fetchPathList } from '../../actions/pathList';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

function HomePath() {
  const dispatch = useDispatch()
  const pathList = useSelector((state:any) => state.pathReducer);
  const navigate = useNavigate();
  console.log("paths",pathList)


  useEffect(() => {
    fetchPathList(dispatch);
  },[])

  const handleViewMore = () => {
    navigate('/path/doctor-profession')
  }

  return (
      <Box>
        {pathList.list ? 
          <Masonry columns={3} spacing={2}>
            {pathList.list.map((path:any, index:number) => (
              <Paper key={index}>
                <StyledAccordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{path.title}</Typography>
                    <Timeline>
                      {path.body.map((content:any, index:number) => {
                        return (
                          <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined"/>
                                {index !== path.body.length-1 && <TimelineConnector/>}
                              </TimelineSeparator>
                            <TimelineContent>{content.content}</TimelineContent>
                            
                          </TimelineItem>
                        )
                      })}
                  </Timeline>
                    
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {path.description}
                    </Typography>
                    <Button onClick={handleViewMore}>
                      View
                    </Button>
                  </AccordionDetails>
                </StyledAccordion>
              </Paper>
            ))}
          </Masonry>
        : <div>Loading ...</div>}
    </Box>
  );
}

export default HomePath;