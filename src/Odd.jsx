import React from 'react';
import {Page1} from './page_1';
import {Page3} from './page_3';
export class Odd extends React.Component {
  render() {
    return(
      <div>
          These are odd pages.
      <Page1/>
      <Page3/>
      </div>
    )
  }
}