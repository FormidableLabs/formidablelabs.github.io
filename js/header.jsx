var React = require('react');
var Radium = require('radium');

var Header = React.createClass(Radium.wrap({
  displayName: 'Header',

  render: function () {
    return (
      <header>
        <a
          style={styles.link}
          href="http://formidable.com"
        >
          <img
            style={styles.logo}
            src="img/logo-white.svg"
            alt="Formidable"
          />
        </a>

        <a
          ref="banner"
          href="mailto:hello@formidable.com"
          style={styles.banner}
        >
          Need React.js Consulting? Contact Us.
        </a>
      </header>
    );
  }
}));

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
  },

  banner: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    padding: '10px',
    borderBottom: '1px solid #1D2227',
    background: '#2b303b',
    color: '#fff',
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center',

    ':hover': {
      background: '#3F4656',
      borderBottom: '1px solid #252A33'
    }
  }
}

module.exports = Header;
