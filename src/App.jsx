import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import { setUserInfo } from './slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userInfo)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      dispatch(setUserInfo(userData));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [dispatch]);

  return (
    <>
      <Header isLogin={isLogin} user={user} />
    </>
  )
}

export default App;
