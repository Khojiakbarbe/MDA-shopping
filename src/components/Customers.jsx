import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";





export default function Customers() {

    const navigate = useNavigate();

    const [customers, setCustomers] = useState([])
    const [open, setOpen] = useState(true)

    const [password, setPassword] = useState('')

    function check() {
        if (password == '') {
            setOpen(false)
        } else {
            setOpen(true)
            alert("if you forgot password Please try later or write to developer")
        }
    }

    useEffect(() => {
        axios.get('http://localhost:9000/contactUs')
            .then(res => {
                setCustomers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container p-5">

            {
                open ?
                    <>
                        
                        <input type="text" onChange={e => setPassword(e.target.value)} placeholder="please write password for see customers page" className="form-control" />
                        <button type="button"  className="btn btn-primary mt-3"  onClick={check}>Enter</button>
                    </>
                    :
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Phone number
                                </th>
                                <th>
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(post => {
                                return (
                                    <tr key={post.id}>
                                        <th scope="row">
                                            {post.id}
                                        </th>
                                        <td>
                                            {post.name}
                                        </td>
                                        <td>
                                            {post.phone}
                                        </td>
                                        <td>
                                            {post.message}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
            }
        </div>
    )
}