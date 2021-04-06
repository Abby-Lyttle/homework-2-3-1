import React from 'react';
import {Page2} from './page_2';
import {Page4} from './page_4';
export class Even extends React.Component {
  render() {
    return(
      <div>
          These are even pages.
      <Page2/>
      <Page4/>
      </div>
    )
  }
}