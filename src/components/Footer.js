import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.changePageNext = this.changePageNext.bind(this)
    this.changePagePrev = this.changePagePrev.bind(this)
  }

  changePagePrev() {
    let prevCurrentPage = this.props.currentPage;
    if(this.props.currentPage > 1) {
      this.props.updateData({ currentPage: prevCurrentPage - 1 })
    }
  }

  changePageNext() {
    let numOfPages = Math.round( this.props.amountOfPeople / 10 );
    let prevCurrentPage = this.props.currentPage;
    if(this.props.currentPage < numOfPages) {
      this.props.updateData({ currentPage: prevCurrentPage + 1 })
    }
  }

  shouldDisplayBtn(btn) {
    let numOfPages = Math.round( this.props.amountOfPeople / 10 );
    if(btn === 'next'){
      if(numOfPages === this.props.currentPage){
        return {display: 'none' };
      }else{
        return {display:'inherit'};
      }
    }

    if(btn === 'prev'){
      if(this.props.currentPage === 1){
        return {display:'none'}
      }else{
        return {display:'inherit'}
      }
    }
  }

  render() {
    return(
      <div className='footer'>
        <button style={this.shouldDisplayBtn('prev')} onClick={ this.changePagePrev } className='buttonPrev' type='button'></button>
        <div className='showingPages'>{this.props.startAmount} - {this.props.endAmount}</div>
        <button style={this.shouldDisplayBtn('next')} onClick={ this.changePageNext } className='buttonNext' type='button'></button>
      </div>
    )
  }
}

export default Footer
