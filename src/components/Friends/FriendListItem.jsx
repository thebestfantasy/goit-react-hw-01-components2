import css from './friends.module.css';

export const FriendListItem = ({ key, avatar, name, isOnline }) => {
  return (
    <li key={key} className={css.listItem}>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img src={avatar} alt={name} className={css.photo} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
