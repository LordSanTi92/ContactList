import React from 'react'

    class SearchBar extends React.Component{
      constructor(props){
        super(props)
        this.state={
          text: "",
          sortType:"down",
          buttonName: "A-Z"
        }
      }
      handleChange=event=>{
        this.setState({
          text: event.target.value
        })
        if(typeof this.props.filterSearch === "function"){

          this.props.filterSearch(event.target.value)
        }
      }
      handleClick = () =>{
        if(this.state.sortTyp==""||this.state.sortType=="up"){
          this.setState({
            sortType :"down",
            buttonName: "A-Z"
          })

        }
        else if(this.state.sortType==""||this.state.sortType=="down"){
          this.setState({
            sortType :"up",
            buttonName: "Z-A"
          })



        }
this.props.sorting(this.state.sortType)
      }
      render(){
        return <div>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>{this.state.buttonName}</button>
              </div>
      }
    }





export default SearchBar;
