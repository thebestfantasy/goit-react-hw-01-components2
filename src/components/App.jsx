import React from 'react';
import { Profile } from './Profile/Profile.jsx';
import { Statistic } from './Statistics/Statistics.jsx';
import { FriendList } from './Friends/FriendList.jsx';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json';
import { Transactions } from './Transactions/Transactions.jsx';

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
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
