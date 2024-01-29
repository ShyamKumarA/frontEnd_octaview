import React from 'react';
import { DropdownItem } from 'reactstrap';
import { User,Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import user1 from '../../assets/images/users/user1.jpg';

const ProfileDD = () => {
  return (
    <div>
      <div className="d-flex gap-3 p-3 border-bottom pt-2 align-items-center">
        <img src={user1} alt="user" className="rounded-circle" width="55" />
        <span>
          <h5 className="mb-0 fw-medium">John Deo</h5>
          <small className='text-muted'>info@wrappixel.com</small>
        </span>
      </div>
      <Link to="/admin-profile" style={{ textDecoration: 'none' }}>
  <DropdownItem className="px-4 py-3">
    <User size={20} className="text-muted" />
    &nbsp; My Profile
  </DropdownItem>
</Link>
      
      <DropdownItem divider />
      <DropdownItem className="px-4 py-3">
        <Settings size={20} className="text-muted" />
        &nbsp; Settings
      </DropdownItem>
      <DropdownItem divider />
    </div>
  );
};

export default ProfileDD;
