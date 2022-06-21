import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useState } from 'react';
import jsCookie from 'js-cookie'
import Url from '../../../Config';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const GrupTable = () => {
    const token = jsCookie.get('auth')
    const [groups, setGroups] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getGroups();
    }, [])

    const getGroups = async () => {
        axios.get(`${Url}/groups`, {
        headers: { 
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(res => setGroups(res.data.data))
    }

    const deleteGroups = async (id) => {
        await axios.delete(`${Url}/groups/${id}`, {
            headers: { 
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        getGroups();
        Swal.fire(
            'Berhasil Dihapus!',
            `${id} Berhasil hapus`,
            'success'
          )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
      };

    if(groups?.length > 0) {
        return (
          <>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Kode</TableCell>
                  <TableCell>Nama Grup</TableCell>
                  <TableCell>Keterangan</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                          {groups
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((d) => {
                              return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={d.id}>
                                <TableCell>{d.id}</TableCell>
                                <TableCell>{d.name}</TableCell>
                                <TableCell>{d.description}</TableCell>
                                <TableCell>
                                    <Link to="/grup/detail">
                                        <button type="button" className="btn">
                                            <InfoIcon />
                                        </button>
                                    </Link>
                                    <Link to={`/grup/edit/${d.id}`}>
                                        <button type="button" className="btn">
                                            <EditIcon />
                                        </button>
                                    </Link>
                                        <button onClick={() => deleteGroups(d.id)} type="button" class="btn">
                                            <DeleteIcon />
                                        </button>
                                        </TableCell>
                            </TableRow>
                              )
                          })}
                      </TableBody>
        </Table>
    </TableContainer>
    <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={groups.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
    </Paper>
          </>
        )
    }

    return (
        <p>Loading</p>
    )

}

export default GrupTable