import { useState }  from 'react'

export default function LoginControl1() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true)
    let butonLabel = 'logIn'
    if (isLoggedIn){
      butonLabel = 'LogIn'
    }else {
      butonLabel = 'LogOut'
    }
    return <button onClick={ () => setIsLoggedIn(!isLoggedIn)}>{butonLabel}!</button>      
  }