import avatar from '../../assets/Images/Mohan-muruge.jpg';
 import logo from '../../assets/Images/Logo/BrainFlix-logo.svg';
import '../PageHeader/PageHeader.scss';

function Header() {
  return (
    <div className='header__wrapper'>
      <section className='header'>
        <div className='header__logo-section'>
          <a href='/'>
            <img className='header__logo' src={logo} alt='logo' />
          </a>
        </div>
        <div className='header__search-upload-wrapper'>
          <div className='header__search'>
            <input className='header__search-bar' placeholder='Search' />
            <img src={avatar} alt='avatar' className='header__avatar header__avatar--mobile' />
          </div>
          <div className='header__upload-bar'>
            <a href='/upload'>
              <button className='header__upload-btn' type='#'>
                UPLOAD
              </button>
            </a>
            <img src={avatar} alt='avatar' className='header__avatar header__avatar--tablet' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
