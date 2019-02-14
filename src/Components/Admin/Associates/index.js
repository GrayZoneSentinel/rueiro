import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';


import { firebaseAssociates } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

import CircularProgress from '@material-ui/core/CircularProgress';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class AdminAssociates extends Component {

    state = {
        isloading: true,
        associates: []
    }

    componentDidMount() {
        firebaseAssociates.once('value').then(snapshot =>{
            const associates = firebaseLooper(snapshot);

            this.setState({
                isloading: false,
                associates: reverseArray(associates)
            })
        });
    }

    render() {

        console.log(this.state)

        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Nombre</strong></TableCell>
                                    <TableCell><strong>Apellidos</strong></TableCell>
                                    <TableCell><strong>Fecha de nacimiento</strong></TableCell>
                                    <TableCell><strong>Documento de identidad</strong></TableCell>
                                    <TableCell><strong>Teléfono de contacto</strong></TableCell>
                                    <TableCell><strong>Correo electrónico</strong></TableCell>
                                    <TableCell><strong>Fecha de incorporación</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.associates 
                                        ?
                                        this.state.associates.map((associate,i) => (
                                            <TableRow key={i}>
                                                <TableCell>{associate.nombre}</TableCell>
                                                <TableCell>{associate.primerApellido} {associate.segundoApellido}</TableCell>
                                                <TableCell>{associate.fechaNacimiento}</TableCell>
                                                <TableCell>{associate.dni}</TableCell>
                                                <TableCell>{associate.telefono}</TableCell>
                                                <TableCell>{associate.correo}</TableCell>
                                                <TableCell>{associate.fechaIncorporacion}</TableCell>
                                                
                                                {/* <Link to={`/admin_associates/edit_associate/${associate.id}`}> */}
                                                {associate.primerApellido} {associate.segundoApellido}
                                                    {/* </Link> */}
                                            </TableRow>
                                        ))
                                        :
                                        null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    {/* Loader Spinner  */}
                    <div className="admin_progress">
                        {
                            this.state.isloading
                            ?
                            <CircularProgress thickness={4} style={{color:'#008ee0', padding:'50px'}}/>
                            :
                            ''
                        }
                    </div>
                </div>
            </AdminLayout>
        )
    }
}

export default AdminAssociates;