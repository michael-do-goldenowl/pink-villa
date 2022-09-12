import './styles.scss';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-text">My Application</div>

        <img
          alt='user-avt'
          src="https://static.chotot.com/storage/default/transparent_logo.webp"
          className="logo-avt" />
      </div>
    </header>

  )
}

export default Header
