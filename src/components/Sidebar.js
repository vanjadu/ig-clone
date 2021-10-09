import React from 'react';
import '../styles/sidebar.scss';
import Sticky from 'react-sticky-el';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import ProfileImage from '../images/my-profile.jpg';

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="dulikravicvanja"
          caption="Vanja Dulikravic"
          urlText="Switch"
          iconSize="big"
          image={ProfileImage}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default Sidebar;
