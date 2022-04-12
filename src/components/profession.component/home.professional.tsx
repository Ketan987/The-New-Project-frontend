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

    const rows= [
        {profession: "one", popularity: "two", demands: "three", profession_type: "four", people_choice: "five"},
        {profession: "two", popularity: "", demands: "", profession_type: "", people_choice: ""},
        {profession: "", popularity: "", demands: "", profession_type: "", people_choice: ""},
        {profession: "", popularity: "", demands: "", profession_type: "", people_choice: ""},
        {profession: "", popularity: "", demands: "", profession_type: "", people_choice: ""}
        
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
                                            key={row.demands}
                                            >
                                                {row.demands}
                                            </StyledTableCell>
                                            <StyledTableCell
                                            key={row.popularity}
                                            >
                                                {row.popularity}
                                            </StyledTableCell>
                                            <StyledTableCell
                                            key={row.past_records.earning}
                                            >
                                                {row.past_records.earning}
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
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component= "div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                >
                </TablePagination>
            </Paper>
        </div>
    )
}

export default HomeProfesssion;