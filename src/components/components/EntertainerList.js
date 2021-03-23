import React, { useState, useEffect } from 'react'
import Entertainer from './Entertainer'
import axios from "axios";

export default function EntertainerList() {
    const [entertainerList, setEntertainerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshEntertainerList();
    }, [])

    const employeeAPI = (url = 'https://localhost:5001/api/EntertainmentVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshEntertainerList() {
        employeeAPI().fetchAll()
            .then(res => {
                setEntertainerList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('employeeID') == "0")
            employeeAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshEntertainerList();
                })
                .catch(err => console.log(err))
        else
            employeeAPI().update(formData.get('employeeID'), formData)
                .then(res => {
                    onSuccess();
                    refreshEntertainerList();
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
                .then(res => refreshEntertainerList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card"onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive" width="170" height="170" />
            <div className="card-body ">
                <h5>{data.employeeName}</h5>
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.employeeID))}>
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
                        <h1 className="display-4">publish Addvertisments</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Entertainer
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
            <h1 className="lead">List of Addvertisments records</h1>
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(entertainerList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(entertainerList[3 * i])}</td>
                                    <td>{entertainerList[3 * i + 1] ? imageCard(entertainerList[3 * i + 1]) : null}</td>
                                    <td>{entertainerList[3 * i + 2] ? imageCard(entertainerList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
