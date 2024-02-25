import React, { useState, useEffect } from 'react';

const Pagination = ({ students , onUpdate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Default size
  const [displayedStudents, setDisplayedStudents] = useState([]);

  useEffect(() => {
    updateDisplayedStudents();
    // students add karna hai 
  }, [ students ,currentPage, pageSize]);

  const updateDisplayedStudents = () => {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
    const paginatedStudents = students.slice(startIndex, endIndex);
    setDisplayedStudents(paginatedStudents);
    onUpdate(displayedStudents);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1); 
  };

  const handleGoToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleGoToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleGoToNextPage = () => {
    const totalPages = Math.ceil(students.length / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleGoToLastPage = () => {
    const totalPages = Math.ceil(students.length / pageSize);
    setCurrentPage(totalPages);
  };


  return (
    <div className='row mt-5 d-flex'>
        <div  className='col-4 mt-2'></div>
        <div  className='col-2 mt-3'>
      <select style={{width:"100%"}} className="form-select justify-content-center" value={pageSize} onChange={handlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      </div>
      <div  className='col-2 mt-2'>
      
      <button className='px-4' style={{width:"20px" , backgroundColor:"white"}} onClick={handleGoToFirstPage}>{'<<'}</button>
      <button className='px-4' style={{width:"20px" , backgroundColor:"white"}} onClick={handleGoToPreviousPage}>{'<'}</button>
      <span className=''>{` Page ${currentPage} of ${Math.ceil(students.length / pageSize)}`}</span>
      <button className='px-4' style={{width:"20px" , backgroundColor:"white"}} onClick={handleGoToNextPage}>{'>'}</button>
      <button className='px-4' style={{width:"20px" , backgroundColor:"white"}} onClick={handleGoToLastPage}>{'>>'}</button>
    </div>
    </div>

  );
};

export default Pagination;
