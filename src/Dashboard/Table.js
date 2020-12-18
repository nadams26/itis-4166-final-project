import React, { Component } from 'react'
import axios from 'axios'

const budget = {
   budget: []
}

class Table extends Component {

   constructor(props) {
      super(props)
      this.state = {
         budget: [
            { name: "Groceries", value: 100 },
            { name: "Gasoline", value: 200 },
            { name: "Music", value: 300 },
            { name: "Movies", value: 400 }
         ]
      }
   }

   componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/https://itis-4166-final-project-server.herokuapp.com/`)
        .then(res => {
          console.log(res.data);
        })
    }

   deleteRow(name) {
      console.log(name + " deleted");
   }

   renderTableData() {
      return this.state.budget.map((budget, index) => {
         const { name, value } = budget
         return (
            <tr>
               <td>{name}</td>
               <td>{value}</td>
               <td><button onClick={() => this.deleteRow(name)}>Delete</button></td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Your Budget</h1>
            <table id='budget'>
               <tr>
                  <th>Name</th> <th>Value</th>
               </tr>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table