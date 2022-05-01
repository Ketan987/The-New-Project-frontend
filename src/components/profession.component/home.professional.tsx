import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, tableCellClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ActionTypes from '../../constant/ActionTypes';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import fetchProfessionalList from '../../actions/professionList';


const HomeProfesssion = () => {
    const [page, setPage] = React.useState(0);
    const [loading, setLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [view, setView] = useState(false);
    const dispatch = useDispatch();
    const professionLists = useSelector((state:any)=> state.profesionReducer);
    console.log(professionLists.list);

    const columns = [
        {id: 1, label: "Profession"},
        {id: 2, label: "Category / Type"},
        {id: 3, label: "Popularity"},
        {id: 4, label: "Average Salary"},
        {id: 5, label: "Appeared"}
    ];

    const handlePageChange = (event:unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
    

    useEffect(()=> {
        fetchProfessionalList(dispatch);
    }, []);

    const handleClick = (title: string) => {
        dispatch({type: ActionTypes.SELECT_PROFESSION_ACTION, payload: {selected: professionLists.list.find((profession:any) => profession.title === title)}})
        setView(true);
    }
    const ListView = () => {
        return(
            <div>
                <Paper sx={{ width: '100%', overflow: 'hidden'}}>
                    <TableContainer sx={{ maxHeight: 500 }}>
                        <Table stickyHeader aria-label="Professional List">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                        key={column.id}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {loading ? (
                                <TableBody>
                                    {professionLists.list.map((row)=> {
                                        return (
                                            <TableRow>
                                                
                                                <StyledTableCell>
                                                <Button onClick={() => handleClick(row.title)}>
                                                {row.title}
                                            </Button>    
                                                </StyledTableCell>
                                                <StyledTableCell
                                                key={row.popularity}
                                                >
                                                    {row.popularity}
                                                </StyledTableCell>
                                                <StyledTableCell
                                                key={row.popularity}
                                                >
                                                    {row.popularity}
                                                </StyledTableCell>
                                                <StyledTableCell
                                                key={row.analysis_records?.earning}
                                                >
                                                    {row.analysis_records?.earning}
                                                </StyledTableCell>
                                                <StyledTableCell
                                                key={row.people_choice}
                                                >
                                                    {row.people_choice}
                                                </StyledTableCell>
                                            </TableRow>
                                        )
                                    })}                                
                                </TableBody>
                            ):
                            (
                                <div>
    
                                </div>
                            )}
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        )
    }

    const HalfAndHalfView = () => {
        return (
            <div style={{display: "flex"}}>
                <div style={{flex:"0.3"}}>
                    <TableContainer sx={{maxHeight: 500}}>
                        <Table stickyHeader aria-lable="Profession-half-list">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        Professions
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {professionLists.list.map((row:any)=>{
                                    return (
                                        <TableRow>
                                            <StyledTableCell>
                                                <Button onClick={() => handleClick(row.title)}>
                                                    {row.title}
                                                </Button>    
                                            </StyledTableCell>
                                        </TableRow>
                                    )
                                } )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div style={{  textAlign: "center", flex:"0.7", border: '1px solid #4CAF50'}}>
                    <p>{professionLists.opend.title}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <br></br>
            {view ? <HalfAndHalfView /> : <ListView />}
        </div>
    )
}

export default HomeProfesssion;