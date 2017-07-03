import React from 'react'

class People extends React.Component{
  render(){
  return <div className="person">
  <h1>{this.props.name}</h1>
  <p>Mail address: <span>{this.props.mail}</span></p>
  <p>Birthday: <span>{this.props.birthday}</span></p>
  <p>Address: <span>{this.props.address}</span></p>
  <p>Phone: <span>{this.props.phone}</span></p>
  <p>Password: <span>{this.props.password}</span></p>
  </div>
}
}

export default People;
