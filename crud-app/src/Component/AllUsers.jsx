import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>CRM's</TableCell>
                    <TableCell>Started</TableCell>
                    <TableCell>github</TableCell>
                     <TableCell>deployed</TableCell>
                     <TableCell>CRM_server_IP</TableCell>
                     <TableCell>Elastic_server_IP</TableCell>
                     <TableCell>CRM_database</TableCell>
                     <TableCell>Elastic_database</TableCell> 
                     <TableCell>CRM_directory_route</TableCell>
                     <TableCell>Proxy_url</TableCell>
                     <TableCell>Elastic_Queue</TableCell> 
                     <TableCell>Updated by</TableCell>
                     <TableCell>Updated date time</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> 
                        <TableCell>{user.CRM_server_IP}</TableCell> 
                        <TableCell>{user.Elastic_server_IP}</TableCell> 
                        <TableCell>{user.CRM_database}</TableCell> 
                        <TableCell>{user.Elastic_database}</TableCell> 
                        <TableCell>{user.CRM_directory_route}</TableCell> 
                        <TableCell>{user.Proxy_url}</TableCell> 
                        <TableCell>{user.Elastic_Queue}</TableCell> 
                        <TableCell>{user.Updatedby}</TableCell> 
                        <TableCell>{user.Updateddateandtime}</TableCell> 
                        
                         
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllUsers;