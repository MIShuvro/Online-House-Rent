import React, { Component } from 'react'


export default class TopHeader extends Component {
  render() {
    return (
      <div>
        <div className="toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
         <div id="slidebar">
           <ul>
             <li>বাড়িভাড়া.com</li>
             <li>লগইন</li>
             <li>আপনার বাসা ভাড়া দিন</li>
             <li>আমাদের সম্পর্কে জানতে</li>
           </ul>
         </div>
      </div>
    )
  }
}
