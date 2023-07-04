import React from 'react';
import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} /> */}
    </div>
  );
};
