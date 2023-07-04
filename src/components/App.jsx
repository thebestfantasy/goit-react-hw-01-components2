import React from 'react';
import { Profile } from './Profile/Profile.jsx';
import { Statistic } from './Statistics/Statistics.jsx';
import { FriendList } from './Friends/FriendList.jsx';
import { Transactions } from './Transactions/Transactions.jsx';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

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
