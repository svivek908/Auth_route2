import React from 'react'
import Auth from './Auth'

function Dashboard(props) {
    const { history } = props;

    window.addEventListener("popstate", () => {
      history.go(1);
    });
  

    return (
        <div style={{textAlign:'center'}}>
            <h1>Hello i am Dashboard</h1>
            <button onClick={()=>(Auth.logout(()=>{
                props.history.push("/")
            }))} >Logged out</button>
        </div>
    )
}

export default Dashboard
