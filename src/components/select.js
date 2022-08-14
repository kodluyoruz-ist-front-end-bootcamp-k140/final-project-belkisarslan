import React from 'react'
import "../index.css"


export class Select extends React.Component {
  state = {
    option: "",
    id: ""
}

handleOptionsChange = (event) => {
  this.setState({
  option: event.target.value
 });
}

componentDidMount() {
  
  const json = localStorage.getItem(this.props.name)
  const option = JSON.parse(json)
  this.setState(() => ({ option }))

}
componentDidUpdate(){
  const selectDay = this.props.name
  const json = JSON.stringify(this.state.option)
  localStorage.setItem(selectDay, json)
  console.log(selectDay, json)
}
  
  render() {
    return (
        <select id={this.props.name} className={this.state.option} onChange={this.handleOptionsChange}>

        <option>Çalışma rengi</option>
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



