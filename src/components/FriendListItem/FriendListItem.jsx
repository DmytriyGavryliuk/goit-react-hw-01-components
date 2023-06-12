import css from "./FriendListItem.module.css";
import { getRandomHexColor } from "components/utils/GetRandomColor";
import { onlineStatus } from "components/utils/OnlineStatus";
import PropTypes from 'prop-types';

export function FriendListItem({ friends: { avatar, name, isOnline } }) {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: onlineStatus(isOnline),
        }}
      >
        {isOnline}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
        style={{ backgroundColor: getRandomHexColor() }}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}


FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};