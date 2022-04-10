import {useDispatch} from "react-redux"
import {useState, useEffect} from 'react'
import {addData, addData1} from './actions'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import UserInfo from "./components/UserInfo"
import './App.css'

function App() {
  // For redux actions
  const dispatch = useDispatch();
  
  // Stores the data from the first request
  const [apiData,setApiData] = useState();
  // Stores the data from the second request
  const [apiData1, setApiData1] = useState();
  // Stores the user id to get data from the specific user
  const [userId, setUserId] = useState();
  // Stores data from the specific user
  const [userInfo, setUserInfo] = useState();

  // Array will store the ids of the buttons hence giving the number of buttons
  let userObj = []

  // To fetch the data and then store it in redux store
  useEffect(() => {
    async function fetchData(){
    try{
        // Data from the first/request page 
        const json = await fetch(`https://reqres.in/api/users?page=1`);
        const result = await json.json();
        setApiData(result);
         // Data from the second/request page 
        const json1 = await fetch(`https://reqres.in/api/users?page=2`);
        const result1 = await json1.json();
        setApiData1(result1);
      }catch(err){
        console.log(err);
      }
    }

    fetchData();
  }, [])

    // To get a specific user when the button is clicked
    useEffect(()=>{
      async function fetchData(){
        try{
          if(userId >= 1){
            const json = await fetch(`https://reqres.in/api/users/${userId}`);
            const result = await json.json();
            setUserInfo(result)
          }
          }catch(err){
            console.log(err);
          }
        }
        fetchData();
    },[userId])
  
  
  // If the apiData state has the api data then it will displatch the data to redux store and at the same time check for the ids and add them in userObj
  if (apiData) {
    dispatch(addData(apiData));
    for (let i = 1; i <= apiData.total; i++) {
      userObj.push(i);
    }
  }

  if(apiData1){
    dispatch(addData1(apiData1));
  }

  return (
    <div className="App">
      {/* User Profile */}
      <div className="userInfo">
        {userId ? 
        <UserInfo userData={userInfo} /> : 
        <h1>Click on the button to get the user profile</h1>}  
      </div>
      <div className='page-btns'>
        {/* Page Buttons and a api spinner to show in case of delay */}
         {userObj.length !== 0 ? 
          userObj.map((e) => (
            <button className='profile-btn' onClick={()=> setUserId(e)} key={e}>{e}</button>
          )) : 
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open>
          <CircularProgress color="inherit" />
          </Backdrop>}
      </div>
    </div>
  );
}


export default App;
