import React, { useEffect, useState } from 'react'
// import DataTable from '../components/Table';
import { styles } from '../styles/error';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const Students = () => {
  const accessToken = localStorage.getItem('access-token');
  const [displayedStudents, setDisplayedStudents] = useState([]);  
  const [data2, setData2] = useState([{}]);  
   
  const handleDisplayedStudentsUpdate = (updatedStudents) => {
    setDisplayedStudents(updatedStudents);
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v_1/internal/users/students', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data",data)
        setData2(data); // Update state with fetched data
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
     fetchStudents();

    }
  }, []);

  const dummyData = [
    {
        id: 1,
        name: 'John Doe',
        rollNo: 'R001',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 2,
        name: 'Jane Smith',
        rollNo: 'R002',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id: 3,
        name: 'John Doe',
        rollNo: 'R003',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 4,
        name: 'Jane Smith',
        rollNo: 'R004',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id: 5,
        name: 'John Doe',
        rollNo: 'R005',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 6,
        name: 'Jane Smith',
        rollNo: 'R006',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id: 7,
        name: 'John Doe',
        rollNo: 'R007',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 8,
        name: 'Jane Smith',
        rollNo: 'R008',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id: 9,
        name: 'John Doe',
        rollNo: 'R009',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 10,
        name: 'Jane Smith',
        rollNo: 'R010',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id:11,
        name: 'John Doe',
        rollNo: 'R011',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
    {
        id: 12,
        name: 'Jane Smith',
        rollNo: 'R012',
        department: 'Electrical Engineering',
        degree: 'Master',
        dob: '1988-05-15',
        city: 'San Francisco',
        interest: 'Data Science'
      },
      {
        id: 13,
        name: 'John Doe',
        rollNo: 'R013',
        department: 'Computer Science',
        degree: 'Bachelor',
        dob: '1990-01-01',
        city: 'New York',
        interest: 'Programming'
    },
      // Add more dummy data items as needed
    ];
    
  //  setData2(dummyData)

  //   useEffect(()=>{
  // //     // fetch('YOUR_BACKEND_API_ENDPOINT')
  // //     // .then(response => response.json())
  // //     // .then(data => {
  // //     //     // Update state with fetched data
  // //     //     setData(data);
  // //     // })
  // //     // .catch(error => {
  // //     //     // Handle errors
  // //     //     console.error('Error fetching data:', error);
  // //     // });
  
  //     //  setData2(dummyData);
  
  // },[]) 

    if (!accessToken) {
      return (<>
       <div className='Error' style={styles.errorContainer}>
        <div style={styles.errorText}>OOps! You need to Login First</div>
      </div>
      
      </>) // Optional: Render nothing or a loading indicator
    }

  return (
    <div>
        <Pagination students={dummyData}  onUpdate={handleDisplayedStudentsUpdate}/>
        <Table data ={displayedStudents}/>
    </div>
  )
}

export default Students