import './UserInfo.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function UserInfo(props) {
  return (
    <div className='profile'>
      {/* Contains User Profile */}
       <div className="left-data">
         <h1 className="left-data__userName">
          <span className="user-name">Name : </span> 
          {props.userData ?  
          props.userData.data.first_name + " " + props.userData.data.last_name:
          "User Name"}
         </h1>
         <h2 className="left-data__userEmail">
         <span className="user-contact">Contact : </span> 
          {props.userData ?  
          props.userData.data.email :
          "User Info"}
         </h2>
       </div>
       <div className="right-data">
         {props.userData ? 
         <img className='right-data__userAvata' src={props.userData.data.avatar} alt="Profile" /> :
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}open>
        <CircularProgress color="inherit" />
        </Backdrop>}
       </div>
    </div>
  )
}

export default UserInfo