var React = require('react');
var Radium = require('radium');

var Header = React.createClass({
  displayName: 'Header',

  render: function () {
    return (
      <header>
        <a
          style={styles.link}
          href="http://formidablelabs.com"
        >
          <img
            style={styles.logo}
            src="img/logo.svg"
            alt="Formidable Labs"
          />
        </a>
      </header>
    );
  }
});

var styles = {
  link: {
    maxWidth: 300,
    display: 'block',
    margin: '100px auto 20px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff'
  },

  logo: {
    maxWidth: '100%',
    height: 'auto'
  },

  heading: {
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}

module.exports = Header;
