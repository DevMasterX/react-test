import { Component } from "react";

class FormCreateTodo extends Component {
    state = { 
        inputValue:''
     } 

    handleChange = ({target: {value}}) => {
        this.setState({inputValue: value})
    }


    render() { 
        console.log(this.state.inputValue)
        return (

<form className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputTodo" className="form-label">Todo title</label>
    <input type="text" onChange={this.handleChange} className="form-control" id="exampleInputTodo" value = {this.state.inputValue} />
    
  </div>
  
  <button type="submit" className="btn btn-primary">Create todo</button>
</form>

        );
    }
}
 
export default FormCreateTodo;