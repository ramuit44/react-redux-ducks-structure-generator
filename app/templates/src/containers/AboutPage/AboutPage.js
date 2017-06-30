import React, { PropTypes, Component } from 'react';
import styles from './AboutPage.scss';

class AboutPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'About Us';
    this.context.onSetTitle(title);

    return (
      <div className="AboutPage">
        <div className="AboutPage-container">
          <h1>{title}</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    );
  }

}

export default AboutPage;
