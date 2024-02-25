import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';

const Table = ({data}) => {
    
    const [editingId, setEditingId] = useState(null);
    
const btnStyle ={
    width : "15%",
    margin: "5px"
}

function handleView(){

}

function handleEdit(id){
    setEditingId(id);

}

function handleDelete(){

}

const handleCancelEdit = () => {
    setEditingId(null);
};

const handleSave = (id) => {
    // Save logic goes here, you can update the data in the backend or locally
    setEditingId(null);
};


  return (
    <div className='container-fluid mt-5' style={{maxWidth:"90%"}}>
        

        <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll Number</th>
      <th scope="col">Department</th>
      <th scope="col">Degree</th>
      <th scope="col">DOB</th>
      <th scope="col">City</th>
      <th scope="col">Interest</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
                 {data.map(item => (
                        <tr key={item.id}>
                            <td>{editingId === item.id ? <input type="text" value={item.name} /> : item.name}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.rollNo} /> : item.rollNo}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.department} /> : item.department}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.degree} /> : item.degree}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.dob} /> : item.dob}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.city} /> : item.city}</td>
                            <td>{editingId === item.id ? <input type="text" value={item.interest} /> : item.interest}</td>
                
                            <td>
                            {editingId === item.id ? (
                                    <>
                                        <button className= "btn" onClick={() => handleSave(item.id)}>Save</button>
                                        <button className= "btn" onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ) : (<>
                                <button className= "btn" onClick={handleView} style={btnStyle}>View</button>
                                <button className= "btn" onClick={()=>handleEdit(item.id)} style={btnStyle}><EditIcon /></button>
                                <button className= "btn" onClick={handleDelete} style={btnStyle}><DeleteIcon /></button>
                                </>
                                )}
                            </td>
                        </tr>
                    ))}
    
  </tbody>
        </table>
    </div>
  )
}

export default Table