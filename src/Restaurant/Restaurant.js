import React from 'react'
import NavigationBar from '../NavigationBar /NavigationBar'
import './Restaurant.css'
import data from './data.json'

class Restaurants extends React.Component {
  getValues = (location) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(
      `https://jn6tkciad5.execute-api.ap-northeast-1.amazonaws.com/v1/restaurants?city=${location}`,
      requestOptions,
    ).then((response) => {
      console.log(response)
      return response.json()
    })
    //.then(data => this.setState({ postId: data.id }));
  }

  //const [username, setEmail] = useState("");
  constructor(props) {
    super(props)
    this.state = { value: '0' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    // alert('Your picked place is: ' + this.state.value)
    event.preventDefault()
    this.setState({ postId: data[parseInt(this.state.value)] })
    //this.getValues(this.state.value)
  }

  render() {
      const { RestaurantData } = this.state;
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="body">
            <h3 className="h1Schedule">Select Location</h3>
          </div>
          <div className="divcss">
            <select
              className="select"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="0">Osaka</option>
              <option value="1">Tokyo</option>
              <option value="2">Seoul</option>
              <option value="3">Sapporo</option>
              <option value="4">Kyoto</option>
              <option value="5">Chiba</option>
              <option value="6">Saitama</option>
            </select>
          </div>
          <input className="input" type="submit" value="Submit" />
        </form>
        {this.state.postId && (
          <div>
            <table className='input label'>
              <tr >
                <th><h1 className='h1Schedule'>Name</h1></th>
                <th><h1 className='h1Schedule'>Rating</h1></th>
              </tr>
              {this.state.postId['Items'].map((x) => (
                <tr>
                  <th>{x['name']['S']}</th>
                  <th>
                    {x['rating'] !== undefined
                      ? x['rating']['N'] || x['rating']['S']
                      : 'Null'}
                  </th>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    )
  }
}
export default Restaurants;

