import React from 'react';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Card = ({companyName,jobDetailsFromCompany,jobRole,location,logoUrl,minExp,maxJdSalary,minJdSalary}) => {
  return (
    <article className='card-container'>
        <div className='timestamp'>
          <WatchLaterIcon fontSize='medium' />
          <p>Posted 10h ago</p>
        </div>
        <div className='logo'>
          <img src={logoUrl} alt='logo' height={70} width={70}></img>
          <div className='company-details'>
            <h6 style={{ color: 'grey', margin: '0' }}>{companyName}</h6>
            <h6 style={{ margin: '0' }}>{jobRole}</h6>
          </div>
        </div>
        <p style={{ marginTop: '0', marginLeft: '80px' }}>{location}</p>
        <div className='pay-container'>
          <p style={{ margin: '0' }}>Estimated Salary: {minJdSalary}- {maxJdSalary} LPA <img src='/assets/check.png' alt='icon' height={13} width={13}></img></p>
        </div>

        <div className='description-container'>
          <div style={{ height: '43px' }}>
            <h6 style={{ margin: "0" }}>About Company<br />About us</h6>
          </div>
          <p style={{ margin: "0" }}>{jobDetailsFromCompany}</p>
        </div>
        <p style={{marginTop:'0',marginLeft:'3px',color:'grey',fontWeight:'600'}}>Minimum Experience<br/>{minExp!=null?minExp:1} years</p>
        <div className='button-container'>
          <button className='apply-btn'><img src='/assets/star.png' alt='logo'></img>  Easy Apply</button>
          <button><img src='/assets/profile.png' alt='logo' height={25} width={25}></img>Unlock referal asks</button>
        </div>
      </article>
  )
}

export default Card