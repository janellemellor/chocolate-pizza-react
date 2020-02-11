import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SectionOne from './SectionOne.js';
import SectionTwo from './SectionTwo.js';
import SectionThree from './SectionThree.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header logo={'logo.png'} />
        <SectionOne
          title={'Chocolate Pizza'}
          date={'15 Dec 2013'}
          category={'Desserts'}
          pOne={
            'For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.'
          }
          pTwo={
            'Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.'
          }
          pThree={
            'Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.'
          }
        />
        <SectionTwo />
        <SectionThree
          authorName={'Vanessa Stevenson'}
          authorBio={
            'Food enthusiast, photography fan. Add a pinch of raw foodism and that`s pretty much who I am.'
          }
        />
        <Footer smallLogo={'small-logo.png'} />
      </div>
    );
  }
}
