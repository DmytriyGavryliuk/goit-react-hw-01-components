import css from "./FriendList.module.css";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem friends={friend} key={friend.id} />
      ))}
    </ul>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};