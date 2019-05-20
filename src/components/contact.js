import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Febi Fiolanda</h2>
            <img
              src="https://lh3.googleusercontent.com/-YNiqwDqlioI/Wfqyld2vtbI/AAAAAAAAAE0/2KhsHCQqlJUBlMT1z7HYSq1FBUEJ9L0RwCEwYBhgL/w140-h140-p/PhotoGrid_1509600671970.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello, I’m Febi. I really like math, counting is my hobbies. I’m interesting on Front End Developer and UI/UX Designer.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    082135782690
                  </ListItemContent>
                </ListItem>
{/* 
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    febyfiolanda@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    Febi Fiolanda
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
