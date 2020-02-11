import React, { Component } from 'react';

export default class SectionTwo extends Component {
  render() {
    return (
      <div>
        <div className='ingredient-list'>
          <label className='checklist'>
            <input type='checkbox'></input>1 1/2 cups milk
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1/2 cup mascarpone
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1/2 tsp pink salt
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1 lb Black Mission Figs
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1/2 cup brown sugar
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>2-4 tbsp water
          </label>
        </div>

        <div className='ingredient-list'>
          <label className='checklist'>
            <input type='checkbox'></input>1 1/2 cups heavy cream
          </label>
          <label className='checklist'>
            <span className='checkbox'></span>
            <input type='checkbox'></input>
            1/3 granulated sugar
          </label>
          <label className='checklist'>
            <span className='checkbox'></span>
            <input type='checkbox'></input>2 egg yolks
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1 lemon, juiced
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>2 tbsp butter
          </label>
          <label className='checklist'>
            <input type='checkbox'></input>1 cup honey roasted pecans, roughly
            chopped
          </label>
        </div>
      </div>
    );
  }
}
