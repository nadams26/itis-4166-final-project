import React from 'react';
import Table from './Table';

function Dashboard() {
  return (
    <div>
        <h1 className = "pageTitle">Dashboard</h1>
        <hr/>
        <Table/>
        <hr/>
        <h4>Add Entry:</h4>
        <div>Name: <input></input></div>
        <div>Amount: <input></input></div>
        <input type="button" value="Submit"></input>
        <hr/>
    </div>
  );
}

export default Dashboard;