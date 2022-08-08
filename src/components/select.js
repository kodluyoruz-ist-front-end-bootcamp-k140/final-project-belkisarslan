import React from 'react'
import "../index.css"

export class Select extends React.Component {
  state = {
    option: " "
}

handleOptionsChange = (event) => {
  this.setState({
  option: event.target.value
 });
}

componentDidMount() {
 
  
}
componentDidUpdate(){
 const item = this.state.option
 console.log(item)
  
  
}
  
  render() {
    return (
        <select className={this.state.option} onChange={this.handleOptionsChange}>
        <option select="true">Çalışma süresi</option>
        <option className="opt" value='bg-1'>1 Saat</option>
        <option className="opt" value='bg-2'>2 Saat</option>
        <option className="opt" value='bg-3'>3 Saat</option>
        <option className="opt" value='bg-4'>4 Saat</option>
        <option className="opt" value='bg-5'>5 Saat</option>
        <option className="opt" value='bg-6'>6 Saat</option>
        <option className="opt" value='bg-7'>7 Saat</option>
        <option className="opt" value='bg-8'>8 Saat+</option>
      </select>
    )
  }
}



