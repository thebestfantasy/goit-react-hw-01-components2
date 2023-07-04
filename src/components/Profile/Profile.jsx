import PropTypes from 'prop-types';
import {
  Container,
  List,
  ListItem,
  Name,
  Quantity,
  Social,
  Stats,
} from './Profile.styled';

export const Profile = user => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <Container>
      <div className="description">
        <img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Social>@{tag}</Social>
        <Social>{location}</Social>
      </div>
      <Stats>
        <List>
          <ListItem>
            <span>Followers</span>
            <Quantity>{followers}</Quantity>
          </ListItem>
          <ListItem>
            <span>Views</span>
            <Quantity>{views}</Quantity>
          </ListItem>
          <ListItem>
            <span>Likes</span>
            <Quantity>{likes}</Quantity>
          </ListItem>
        </List>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
