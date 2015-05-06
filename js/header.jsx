var React = require('react');
var Radium = require('radium');

var Header = React.createClass({
  displayName: 'Header',
  
  render: function () {
    return (
      <header>
        <a style={linkStyle} href="http://formidablelabs.com">
          <img
            width="400"
            src="img/formidable-logo.svg"
            alt="Formidable Labs"
          />
        </a>
      </header>
    );
  }
});

var linkStyle = {
  display: 'block',
  margin: '100px 0 50px',
  textAlign: 'center'
};

module.exports = Header;
