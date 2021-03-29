
import React, { useState, useEffect } from 'react'

import axios from "axios";


//import VendorList from './components/VendorList';

export default function AddBoard_Saloon() {
    const [saloonList, setSaloonList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshSaloonList();
    }, [])

    const employeeAPI = (url = 'https://localhost:5001/api/SaloonVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshSaloonList() {
        employeeAPI().fetchAll()
            .then(res => {
                setSaloonList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            employeeAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshSaloonList();
                })
                .catch(err => console.log(err))
        else
            employeeAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshSaloonList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    

    const imageCard = data => (
        <div className="card text-center" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive-center" width="250" height="250" />
            <div className="card-body">

            <h2><span class="badge badge-danger">{data.companyName}</span></h2>
 
                <span>{data.locatedDistrict} Distric</span> <br />
                <span>{data.locatedProvince} Province</span> <br />
                <span className="center">Min Package - {data.min_package}</span> <br />
               
                <span>Max Package -{data.max_package}</span> <br />
                <span>Telephone-{data.telephoneNumber}</span> <br />
				<span>See Our Website-{data.companyWebsite}</span> <br />
               
            </div>
        </div>
    )









  
    return (
    
        <div className="row">
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">List of Addvertisments</h1>
                </div>
            </div>
        </div>
        <div >
           
        </div>
        <div className="center-align">
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(saloonList.length / 3))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(saloonList[3 * i])}</td>
                                <td>{saloonList[3 * i + 1] ? imageCard(saloonList[3 * i + 1]) : null}</td>
                                <td>{saloonList[3 * i + 2] ? imageCard(saloonList[3 * i + 2]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
                 
                
    


)
}


