import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './friendlist.module.scss'

function FriendList({ friends = [] }) {
    const elements = friends.map(element => {
      const { avatar, name, isOnline, id } = element;
  
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      );
    });
  
    return <ul className={css['friend-list']}>{elements}</ul>;
  }
  
  FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
  };
  
  export default FriendList;