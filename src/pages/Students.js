import React from 'react'
import Layout from './Layout'
import {Link} from "react-router-dom"
import { useInputContextConsumer } from '../Context/inputContext'
function Students() {
    const{input}=useInputContextConsumer();
  return (
    <Layout>
        <div className="table__container">
        <div className="student__page__head">
            <h1>Students details</h1>
            <Link to='/form'><button className='add__btn'>Add New Student</button></Link>
        </div>
        <table>
            <tbody>
            <tr>
                 <th>Name</th>
                <th>Age</th>
                 <th>Course</th>
                  <th>Batch</th>
                    <th>Change</th>
           </tr>
                {
                    input && input.map(v=>{
                        return(
                            <tr>
                            <td>{v.name}</td>
                            <td>{v.age}</td>
                            <td>{v.course}</td>
                            <td>{v.batch}</td>
                            <td><Link to='/form'>Edit</Link></td>
                            </tr>
                        )
                    })
                   
                
                }
            </tbody>
        </table>
        </div>
    </Layout>
  )
}

export default Students