import React, { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        department: '',
        gender:'',
        degree: '',
        dob: '',
        startDate: '',
        endDate: '',
        city: '',
        interest: '',
        status: '',
        email: '',
      });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

    const style ={
        "width":"100%",
    }
    const box ={
        "border":"3px solid #013a63",
        "border-radius":"15px"
    }
    const buttonStyle = {
        backgroundColor: '#013a63',
        margin:"30px 100px",
        color: 'white',
        border: '1px solid #013a63',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        // Add more styles as needed
    };


    function HandleCancel(){
        console.log("waiting for time ")
         navigate('/');
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/v_1/internal/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then((data) => {
            console.log('Student data stored:', data);
            navigate('/');
          })
          .catch((error) => {
            console.error('There was an error:', error);
          });
      };

    // to populate interest
    useEffect(()=>{


    },[])


  return (
    <div className="p-5 " style={box}>
        <form onSubmit={HandleSubmit}>
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Full Name</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <input style={style} type="text" className="form-control" id="name" value={formData.name}
        onChange={handleChange}
 placeholder="Enter your full name"/>
            </div>
        </div>
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Roll Number</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <input style={style} type="text" className="form-control" id="rollNo"
        onChange={handleChange}
 placeholder="Enter your full name"/>   
            </div>
        </div>
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Email Address</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <input style={style} type="text" className="form-control" value={formData.email}
        onChange={handleChange}
 id="email" placeholder="Enter your full name"/>
            </div>
        </div>

        {/* Subject */}
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Subject</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <input style={style} type="text" className="form-control" id="subject" placeholder="Enter your full name"/>
            </div>
        </div>

        {/* Gender */}

        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Gender</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <select style={style} className="form-select" value={formData.gender}
        onChange={handleChange}
 id="gender">
                    <option value="option1">Select an option</option>
                    <option value="option2">Male</option>
                    <option value="option3">Female</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
        {/* City */}
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">City</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                 <select style={style} className="form-select" id="city" value={formData.city}
        onChange={handleChange}
> 
                <option value="">Select an option</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Multan">Multan</option>
            </select>
            </div>
        </div>

        {/* Interest */}
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Interest</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                <select style={style} className="form-select" id="exampleFormControlSelect1" 
        onChange={handleChange}
>
                    <option value="option1">Select an option</option>
                    <option value="option2">Cooking</option>
                    <option value="option3">Baking</option>
                    <option value="option3">Sports</option>
                    <option value="option3">Coding</option>
                    <option value="option3">Add an Option</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
        {/* Department */}
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Department</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                 <select style={style} className="form-select" id="department" value={formData.department}
        onChange={handleChange}
>
                <option value="">Select an option</option>
                <option value="CS">CS</option>
                <option value="SE">SE</option>
                <option value="IT">IT</option>
                {/* Add more options as needed */}
            </select>
            </div>
        </div>

        {/* Degree Title */}
        <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Degree Title</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                 <select style={style} className="form-select" id="degree" value={formData.degree}
        onChange={handleChange}
>
                 <option value="">Select an option</option>
                <option value="Associate">Associate Degree</option>
                <option value="Bachelor">Bachelor Degree</option>
                <option value="MPhil">MPhil Degree</option>
                <option value="Postgraduate Diploma">Postgraduate Diploma </option>
                <option value="Doctorate">Doctorate</option>
                <option value="Post Doctorate">Post Doctorate</option>
                {/* Add more options as needed */}
            </select>
            </div>
        </div>

         {/* Status Title */}
         <div className="row d-flex mb-4">
            <div className="col-3 " >
                <label htmlFor="fullName" className="form-label me-5 mt-3">Status</label>
                </div>
            <div className="col-1 " ></div>

            <div className="col-8 " >
                 <select style={style} className="form-select" id="status" value={formData.status}
        onChange={handleChange}
>
                 <option value="">Select an option</option>
                <option value="Studying">Studying</option>
                <option value="Enrolled">Enrolled</option>
                <option value="About to graduate">About to graduate</option>
                <option value="Graduated">Graduated </option>
            </select>
            </div>
        </div>


        {/* Date of Birth */}
        <div className="row d-flex mb-4">
            <div className="col-3">
                <label htmlFor="fullName" className="form-label me-5 mt-3">Dat of Birth</label>
            </div>
            <div className="col-1"></div>
            <div className="col-8">
                <input
                    type="date"
                    id="dob"
                    name="datePicker"
                    className="form-control"
                    value={formData.dob}
        onChange={handleChange}

                />
            </div>
        </div>

          {/* Start Date */}
          <div className="row d-flex mb-4">
            <div className="col-3">
                <label htmlFor="fullName" className="form-label me-5 mt-3">Start Date</label>
            </div>
            <div className="col-1"></div>
            <div className="col-8">
                <input
                    type="date"
                    id="startDate"
                    name="datePicker"
                    className="form-control"
                    value={formData.startDate}
        onChange={handleChange}

                />
            </div>
        </div>

          {/* End Date */}
          <div className="row d-flex mb-4">
            <div className="col-3">
                <label htmlFor="fullName" className="form-label me-5 mt-3">End Date</label>
            </div>
            <div className="col-1"></div>
            <div className="col-8">
                <input
                    type="date"
                    id="endDate"
                    name="datePicker"
                    className="form-control"
                    value={formData.endDate}
        onChange={handleChange}

                />
            </div>
        </div>


        <form className="d-flex" role="search">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
               
                  {/* <Link className="nav-link active" aria-current="page" to="/SignUp"> */}
                    <button className="btn " style = {buttonStyle}  onClick={HandleCancel}>Cancel</button>
                    {/* </Link> */}
               
                {/* <Link className="nav-link active" aria-current="page" to="/Login"> */}
                    <button className="btn btn-outline-light"  type="submit" style = {buttonStyle} >Submit</button>
                    {/* </Link> */}
               {/*  */}

              {/* </ul> */}
              </form>
        </form>
    </div>
    
  )
}

export default Form