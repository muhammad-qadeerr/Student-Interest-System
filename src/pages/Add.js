import React from 'react'
import { styles } from '../styles/error';
import Form from '../components/Form';

const Add = () => {
  const accessToken = localStorage.getItem('access-token');

  if (!accessToken) {
    return (<>
     <div className='Error' style={styles.errorContainer}>
      <div style={styles.errorText}>OOps! You need to Login First</div>
    </div>
    
    </>) // Optional: Render nothing or a loading indicator
  }


  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
      <div className='col-2'></div>
      <div className='col-8'>

      <Form/>

      </div>
      <div className='col-2'></div>
      </div>
      
    </div>
  )
}

export default Add