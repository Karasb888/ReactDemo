import React, {Component} from 'react'
class ListItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='listItem'>
        <div className='listItem__itemNumber'>{this.props.itemNumber}</div>
        <div className='listItem__firstLetter'>{this.props.firstLetter}</div>
        <div className='listItem__info'>
          <div className='listItem__fullName'>{this.props.fullName}</div>
            {this.props.medal
              ? <img className='medal' src={this.props.medal} />
              : null
            }
          <div className='listItem__pageViews'>{this.props.pageviews}</div>
          <div className='listItem__projects'>{this.props.projects} публ.</div>
      </div>
      </div>
    )
  }
}
export default ListItem
