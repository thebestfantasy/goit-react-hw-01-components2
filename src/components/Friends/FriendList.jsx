import { FriendListItem } from './FriendListItem';
import css from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendSection}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
};
