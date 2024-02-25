import React, { useEffect, useState } from 'react';
import { styles } from '../styles/error';
import PiChart from '../components/PiChart';
import BarChart from '../components/BarChart';
import LineChart  from '../components/LineChart';

const Dashboard = () => {

  const [topInterest , setTopInterest] = useState(['travel' , 'Reading ' , 'Writing', 'Code',"News"])
  const [bottomInterest , setBottomInterest] = useState(['cooking' , 'baking ' , 'climbing', 'whispering',"working"])
  const [totalInterest , setTotalInterest] = useState(8)

  const dynamicSeries = [25, 35, 45, 55, 65]; // Update with your new values
const dynamicLabels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']; // Update with your new labels

const departmentSeries = [1, 2, 3, 8, 5]; // Update with your new values
const departmentLabels = ['Dept A', 'Dept B', 'Dept C', 'Dept D', 'Dept E']; // Update with your new labels

const genderSeries = [8, 7]; // Update with your new values
const genderLabels = ['Male', 'Female']; // Update with your new labels

const provincialSeries = [5, 15, 25, 35, 45]; // Update with your new values
const provincialLabels = ['LAhore', 'Karachi', 'Peshawar', 'Multan', 'KPK']; // Update with your new labels


  const [submissionChartData, setSubmissionChartData] = useState([10, 41, 35, 51, 49, 62, 69, 91, 148])
  const [submissionChartCategories, setSubmissionChartCategories] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'])
  const [mostActiveHours , setMostActiveHours] = useState([10 , 11 , 2 , 3])
  const [leastActiveHours , setLeastActiveHours] = useState([9,12,1,4,5])
  const [deadHours , setDeadHours] = useState([12,1,2,3,4])

  const [studentData, setStudentData] = useState([
    { status: 'Active', number: 10 },
    { status: 'Inactive', number: 5 },
    { status: 'Graduated', number: 10 },
    { status: 'Inactive', number: 5 },
  ]);




  const   LineChartSubmissionData ={
    series: [
      {
        name: 'Submissions',
        data: submissionChartData,
      },
    ],
    title: 'Submission Data',
    categories: submissionChartCategories,
  }

 const  Activity30ChartSubmissionData={
    series: [
      {
        name: 'activity',
        data: submissionChartData,
      },
    ],
    title: '30d Activity Data',
    categories: submissionChartCategories,
  }

 const  Activity24ChartSubmissionData={
    series: [
      {
        name: 'activity',
        data: submissionChartData,
      },
    ],
    title: '24h Activity Data',
    categories: submissionChartCategories,
  }


  const AgeSeries = [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
  }];

  const AgeCategories = ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
    'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas',
  ];

  
  useEffect(()=>{

    // to get top and bottom 5 interest and total distinct interest
    function fetchInterest(){

    }

    // to get Activity status
    function fetchActivity(){

    }

  })

const accessToken = localStorage.getItem('access-token');

  if (!accessToken) {
    return (<>
     <div className='Error' style={styles.errorContainer}>
      <div style={styles.errorText}>OOps! You need to Login First</div>
    </div>
    
    </>) // Optional: Render nothing or a loading indicator
  }

  // If the access token exists, render the Dashboard component
  return <div>
    <h1>Dashboard</h1>


    <div className='container-fluid mt-5'>



    <div className='row mt-5'>
      <div className='col-2'><h3>Top Interest </h3></div>
      {topInterest.map((item)=>(
        <button className='col-1 m-2'>Item {item}</button>
      ))}
      <div className='col-4'><h1>Total Interests</h1></div>
    </div>

    <div className='row mt-5'>
      <div className='col-2'><h3>Bottom  Interest </h3></div>
      {bottomInterest.map((item)=>(
        <button className='col-1 m-2'>Item {item}</button>
      ))}
     <div className='col-4 '><h1>{totalInterest}</h1></div>

    </div>


    <div className='row mt-5 '>
    <div className='col-3'></div>
    <div className='col-6'>
    <table class="table table-success table-hover">
  <thead>
      <tr>
        <th scope="col">Student status</th>
        <th scope="col">Student Count</th>
      
      </tr>
  </thead>
      <tbody class="table-group-divider">
      {studentData.map((student, index) => (
          <tr key={index}>
            <td>{student.status}</td>
            <td>{student.number}</td>
          </tr>
        ))}
      </tbody>

    </table>
    </div>
    <div className='col-3'></div>
    </div>

    

    <div className='row mt-5'>
    <div className='col-2'></div>
    <div className='col-4'>
    <PiChart chartSeries={dynamicSeries} chartLabels={dynamicLabels}/>
    <h4>Department Distribution</h4>
    </div>
    <div className='col-4'>

    <PiChart chartSeries={departmentSeries} chartLabels={departmentLabels}/>
    <h4>Degree Distribution</h4>

    </div>
    <div className='col-2'></div>

    </div>

    <div className='row mt-5'>
    <div className='col-2'></div>
    <div className='col-4'>
    <PiChart chartSeries={genderSeries} chartLabels={genderLabels}/>
    <h4 className=' text-align-left'>Gender Distribution</h4>
    </div>
    <div className='col-4'>

    <PiChart chartSeries={provincialSeries} chartLabels={provincialLabels}/>
    <h4>Provincial Distribution</h4>

    </div>
    <div className='col-2'></div>

    </div>

    <div className='row mt-5'>
    <BarChart chartSeries={AgeSeries} chartCategories={AgeCategories} />
</div>

<div className='row mt-5  justify-content-around'>

      <div className='col-3'>
          <LineChart chartData={LineChartSubmissionData} />
      </div>
      <div className='col-3'>
          <LineChart chartData={Activity30ChartSubmissionData} />
      </div>
      <div className='col-3 '>
          <LineChart chartData={Activity24ChartSubmissionData} />
      </div>
    </div>

    <div className='row mt-5 mb-5 justify-content-around'>
      <h5  className='mt-3 mb-5'>Activities</h5>
    <div className='col-3 p-3 border'>
        <h5>Most Active hours in last 30 days</h5>
        <ul>
          {mostActiveHours.map((hour, index) => (
             <p key={index}>{hour}:00</p>
          ))}
        </ul>
      </div>
      <div className='col-3 p-3 border'>
        <h5>Least Active hours in last 30 days</h5>
        <ul>
          {leastActiveHours.map((hour, index) => (
             <p key={index}>{hour}:00</p>
          ))}
        </ul>
      </div>
      <div className='col-3 p-3 border'>
        <h5>Dead Hours in last 30 days</h5>
        <ul>
          {deadHours.map((hour, index) => (
            <p key={index}>{hour}:00</p>
          ))}
        </ul>
      </div>
      </div>



    </div>
  </div>;
};

export default Dashboard;
