import css from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendSection}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.listItem}>
            <span className={friend.isOnline ? css.online : css.offline}>
              {friend.isOnline}
            </span>
            <img src={friend.avatar} alt={friend.name} className={css.photo} />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
