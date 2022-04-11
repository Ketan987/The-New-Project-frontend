import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, tableCellClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import fetchProfessionalList from '../../actions/professionList';


const HomeProfesssion = () => {
    const [page, setPage] = React.useState(0);
    const [loading, setLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch();
    const professionLists = useSelector((state:any)=> state.profesionReducer);
    console.log(professionLists);

    const columns = [
        {id: 1, label: "Profession"},
        {id: 2, label: "Popularity"},
        {id: 3, label: "Current Demands"},
        {id: 4, label: "Profession Type"},
        {id: 5, label: "People Choice"}
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
                                {rows.map((row)=> {
                                    return (
                                        <TableRow>
                                            <StyledTableCell
                                            key={row.profession}
                                            >
                                                {row.profession}
                                            </StyledTableCell>
                                            <StyledTableCell
                                            key={row.popularity}
                                            >
                                                {row.popularity}
                                            </StyledTableCell>
                                            <StyledTableCell
                                            key={row.demands}
                                            >
                                                {row.demands}
                                            </StyledTableCell>
                                            <StyledTableCell
                                            key={row.profession_type}
                                            >
                                                {row.profession_type}
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