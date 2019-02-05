import React, { Component } from 'react'

import {fetchListData} from './api'
import Header from './Header'
import List from './List'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      peoplesPerPage: 10,
      currentPage: 1,
      filterBy: '',
      numberOfTopElem: 3,
      sortBy: null,
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateData = this.updateData.bind(this)
    this.filteredPeoples = this.filteredPeoples.bind(this)
  }

  updateData(newData) {
      let startAmount = this.calculateStartAmountPeople(newData.currentPage);
      let endAmount = this.calculateEndAmountPeople(newData.currentPage);
      this.setState({
        startAmount: startAmount,
        endAmount: endAmount,
        currentPage: newData.currentPage ? newData.currentPage : this.state.currentPage,
        sortBy: newData.sortBy ? newData.sortBy : this.state.sortBy,
        filterBy: newData.filterBy || newData.filterBy === '' ? newData.filterBy : this.state.filterBy,
      })
  }

  calculateStartAmountPeople(current) {
    let currentPage =  current ? current : this.state.currentPage;
    let peoplesPerPage = this.state.peoplesPerPage;

    return(
      currentPage === 1
      ? 1
      : ((currentPage - 1) * peoplesPerPage)
  )}

  calculateEndAmountPeople(current) {
    let startAmount =  this.calculateStartAmountPeople(current);
    let peoplesPerPage = this.state.peoplesPerPage;
    let amountPeople = this.state.amountOfPeople;

    return (
      (amountPeople - startAmount) <= peoplesPerPage
      ? amountPeople
      : startAmount + (peoplesPerPage - 1)
  )}

  componentDidMount() {
    fetchListData('./data.json')
      .then( peoples  => {
        let startAmount = this.calculateStartAmountPeople();
        let endAmount = this.calculateEndAmountPeople();
        let peoplesList = this.createListOfPeoples(peoples);
        this.setState({
            peoples: peoplesList,
            amountOfPeople: peoplesList.length,
            startAmount: startAmount,
            endAmount: endAmount,
            ready: true,
        })
      })
  }

  createListOfPeoples(list) {
    list.sort((a, b) => {
      return b.pageviews - a.pageviews
    })
     list.forEach( (item, i) => {
      item.uniqId = i;
    })
    return list
  }

  filteredPeoples() {
   let filtered;
   let filterBy = this.state.filterBy;
   let sortBy = this.state.sortBy;

   if( this.state.ready ) {
     filtered = this.state.peoples.slice();

  if(filterBy){
    filtered = filtered.filter((item) => {
       let searchWord = filterBy;
       let fullName = item.name;
       searchWord = searchWord.toLowerCase();
       fullName = fullName.toLowerCase();
     return fullName.includes(searchWord);
     }
   )
 }

   switch(sortBy) {
     case 'name-ascending':
     filtered.sort( (a, b) => {
       return a.name.localeCompare(b.name)
     });
     break;
     case 'name-descending':
     filtered.sort( (a, b) => {
       return b.name.localeCompare(a.name)
     });
     break;
     case 'pages-descending':
     filtered.sort( (a, b) => {
       return a.pageviews - b.pageviews
     });
     break;
     case 'pages-ascending':
     filtered.sort( (a, b) => {
       return b.pageviews - a.pageviews
     });
     break;
   }

  filtered = filtered.filter( (item, index) => {
    if(index >= this.state.startAmount - 1
      && index <= this.state.endAmount - 1){
      return true;
    }
  })

  filtered.forEach( (item, i) => {
    item.id = this.state.startAmount + i
  })

  return filtered
  }
}

  render() {
    return(
      <div className='main'>
        <Header updateData={this.updateData} />
        <List
          peoples={this.filteredPeoples()}
        />
        <Footer
          updateData={this.updateData}
          startAmount={this.state.startAmount}
          currentPage={this.state.currentPage}
          amountOfPeople={this.state.amountOfPeople}
          endAmount={this.state.endAmount}
        />
      </div>
    )
  }
}

export default App
