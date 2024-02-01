import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data)
        setUsers(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div data-testid="users-page">
            {
                users.map((user) =>
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`} data-testid="user-item"> {user.name} </Link>
                        <br/>
                    </div>
                )
            }
        </div>
    );
};