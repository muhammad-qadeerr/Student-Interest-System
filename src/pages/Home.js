import React from 'react'

const Home = () => {
  return (
   <>
   <div className='container-fluid my-5'>
        <div className='row'>

        <div className='col-lg-2'> </div>
        <div className={`col-lg-8 text-center`}>

        <div className='screen3-heading'>
            <h1>Students Interest System</h1>
           <h1> By M.Shazil</h1>
            <p className='mt-4 paragraph'>With this innovative system, you can seamlessly manage student data and explore insights into their interests. </p>
            <p  className='  paragraph'> It helps analyze student preferences and generate insightful reports effortlessly.</p>            
            <p  className=' mb-5 paragraph'> Dive into charts and statistics to understand students' inclinations better.</p>            
            </div>
             </div>
        <div className='col-lg-2'> </div>
        </div>

<div className='container d-flex justify-content-center'>

        <div className='row my-4 mt-5 d-flex justify-content-around adjustImg'>

        <div className='col-md-5 col-8 my-4'>
          
        <img src="/student1.jpeg" className='s3-image image'/>
          <h4 className='s3h'>Add Students with Ease</h4>
          <p>Easily add students to the system database. Simplified steps for quick data entry.</p>
          
        </div>
           <div className='col-md-5 col-8 my-4'>
        <img src="/student1.jpeg" className='image'/>
          <h4 className=' s3h'>Explore Student Profiles</h4>
          <p> Explore and navigate through student profiles with an intuitive user interface. Get insights and details at a glance.</p>
          
           </div>

           <div className='col-md-5 col-8 my-4'>
        <img src="/student1.jpeg" className='image'/>
          <h4 className=' s3h'>Visualize Student Data </h4>
          <p>Dynamic charts and graphical representations to interpret student interests and trends.</p>
          
           </div>

           <div className='col-md-5 col-8 my-4'>
        <img src="/student1.jpeg" className='image'/>
          <h4 className=' s3h'>In-depth Analysis</h4>
          <p>Perform in-depth analysis on student preferences and interests for better decision-making.</p>
          
           </div>
        </div>
 </div>
    </div>

   </>
  )
}

export default Home