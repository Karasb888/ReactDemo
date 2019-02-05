import React, { Component } from 'react'


class Header extends Component {
  constructor(props) {
    super(props)
    this.haveChangeOnForm = this.haveChangeOnForm.bind(this);
  }

  haveChangeOnForm({ currentTarget }) {
    const { elements }  = currentTarget;
    let sortingOrder = this.getDatasetValue(elements.sortInput, 'order');
    let filterValue = elements.filterPeoples.value;
    this.props.updateData({ sortBy: sortingOrder , filterBy: filterValue, currentPage: 1});
  }

  getDatasetValue(elements, key){
    const checked = Array.from(elements).find(({ checked }) => checked);
    return checked ? checked.dataset[key] : 'pages-descending'
  }

  render() {
    return (
      <form onChange={ currentTarget => {this.haveChangeOnForm(currentTarget)} } className='header'>
        <input
          type='text'
          name='filterPeoples'
          className='filterPeoples'
          placeholder='&#128269; Поиск автора по имени'
          />
        <fieldset className='sorting'>
          <div className='fieldName'>Имя:</div>
          <div className='sorting__name'>
            <input
              name='sortInput'
              type='radio'
              className='nameField-descending'
              data-order='name-descending'
              />
            <input
              name='sortInput'
              type='radio'
              className='nameField-ascending'
              data-order='name-ascending'
              />
          </div>
          <div className='fieldName'>Просмотры:</div>
          <div className='sorting__page-views'>
            <input
              name='sortInput'
              type='radio'
              className='pageViewsField-descending'
              data-order='pages-descending'
            />
            <input
              name='sortInput'
              type='radio'
              className='pageViewsField-ascending'
              data-order='pages-ascending'
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Header
