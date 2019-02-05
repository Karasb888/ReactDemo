import React, { Component } from 'react'

import ListItem from './ListItem'
import firstMedal from '../medals/1st.svg'
import secondMedal from '../medals/2nd.svg'
import thirdMedal from '../medals/3rd.svg'
class List extends Component {
  constructor(props) {
    super(props)
  }

  setMedal(index) {
    let medal;
    switch(index){
      case 0:
        medal = firstMedal;
        break;
      case 1:
        medal = secondMedal;
        break;
      case 2:
        medal = thirdMedal;
        break;
    }
    return medal
  }
  render() {
    return(
      <div className='list'>
        {this.props.peoples && this.props.peoples.map( (item, i) => {
          return <ListItem
            itemNumber={item.id}
            firstLetter={item.name.charAt(0)}
            fullName={item.name}
            pageviews={item.pageviews}
            projects={item.count_pub}
            medal={this.setMedal(item.uniqId)}
            />
        })}
      </div>
    )
  }
}

export default List
