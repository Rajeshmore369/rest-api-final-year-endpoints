import React, { useEffect } from 'react'
import Alert from '../components/Alert'
import Profile from '../components/Profile'
import { useDispatch, useSelector } from "react-redux";
import { fetchAlert } from "../context/actions/alert";
import { useParams } from 'react-router-dom'
const Home = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlert((id)));
  }, [dispatch]);
  const alerts = useSelector((state) => state.alert[0]);
  const user = alerts?.[0];
  console.log(alerts)
  const totalAlerts = alerts?.length;
  return (
    <div  >
      <Profile userData={user} totalAlerts={totalAlerts} />
      <div className='alertsCards' >
        {
          alerts?.map((userData, index) => {
            return (
              <Alert userData={userData} index={index + 1} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home