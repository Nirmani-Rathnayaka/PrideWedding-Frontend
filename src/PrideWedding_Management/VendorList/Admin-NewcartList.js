import React, { useState, useEffect } from 'react'

import axios from "axios";
import  './Default.css';

export default function NewcartList() {
    const [cartList, setCartList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshCartList();
    }, [])

    const employeeAPI = (url = 'https://prideweddingapi.azurewebsites.net//api/AddingCarts/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshCartList() {
        employeeAPI().fetchAll()
            .then(res => {
                setCartList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            employeeAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshCartList();
                })
                .catch(err => console.log(err))
        else
            employeeAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshCartList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            employeeAPI().delete(id)
                .then(res => refreshCartList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card"onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive" width="170" height="170" />
            <div className="card-body ">
                <h5>{data.companyName}</h5>
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.companyID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                    <br></br>
                        <h1 className="display-4">Pride Wedding Service Cart Items</h1>
                    </div>
                </div>
            </div>
          
            <div>
            <h1 className="lead">Available CartItems</h1>
                <table  >
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(cartList.length / 4))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(cartList[4 * i])}</td>
                                    <td>{cartList[4 * i + 1] ? imageCard(cartList[4 * i + 1]) : null}</td>
                                    <td>{cartList[4 * i + 2] ? imageCard(cartList[4 * i + 2]) : null}</td>
                                    <td>{cartList[4 * i + 3] ? imageCard(cartList[4 * i + 3]) : null}</td>
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
