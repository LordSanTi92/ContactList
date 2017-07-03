import React from 'react';
import './App.css';
import People from './peoplelist';
import SearchBar from './search';
let peopleArr = [{
  id:1,
  name: "Maxine Cunningham",
  mail: "maxine.cunningham99@example.com",
  birthday: "3/31976",
  address: "6425 Rudder Rd",
  phone: "(922)-247-9224",
  password: "nuts",
  tags:[],
  isFav: true
},
{
  id:2,
  name: "Claudia Cruz",
  mail: "claudia.cruz81@example.com",
  birthday: "11/5/1985",
  address: "2080 Daisy Dr",
  phone: "(515)-584-3437",
  password: "guan",
  tags:[],
  isFav: true
},
{
  id:3,
  name: "Micheal Simmmons",
  mail: "micheal.simmmons78@example.com",
  birthday: "4/6/1971",
  address: "2010 Rolling Green Rd",
  phone: "(548)-419-6104",
  password: "chiquita",
  tags:[],
  isFav: false
}
]
class Logic extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text : "",
      sortType:""
    }
  }

  searchFilter = text =>{
    this.setState({
      text: text
    })
  }
  sorting = type =>{
    this.setState({
      sortType: type
    })
  }
  render(){
  let  byName = peopleArr.slice(0);
    if(this.state.sortType=="down"){

byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
})}
else if(this.state.sortType=="up"){
byName.sort(function(a,b) {
var x = a.name.toLowerCase();
var y = b.name.toLowerCase();
return y < x ? -1 : y > x ? 1 : 0;
})}
  return <div className="App">
            <SearchBar filterSearch={this.searchFilter} sorting={this.sorting}/>
            <div className="list">
            <h1>People List</h1>
            {byName.filter(person=>{
            return person.name.includes(this.state.text) ||
            person.mail.includes(this.state.text) ||
            person.birthday.includes(this.state.text) ||
            person.address.includes(this.state.text) ||
            person.phone.includes(this.state.text) ||
            person.password.includes(this.state.text)
            }).map(person=>{
              return <People key ={person.id}
                      name={person.name}
                      mail={person.mail}
                      birthday={person.birthday}
                      address={person.address}
                      phone={person.phone}
                      password={person.password}
                      filterText={this.state.text}/>
        })}
        </div>
        <div className="favList">
        <h1>Fav list</h1>
        {peopleArr.filter(person=>{
          return person.isFav===true
        }).map(person=>{
          return <People  key ={person.id}
                  name={person.name}
                  mail={person.mail}
                  birthday={person.birthday}
                  address={person.address}
                  phone={person.phone}
                  password={person.password}/>
    })
      }
        </div>
        </div>
    }
  }



export default Logic
