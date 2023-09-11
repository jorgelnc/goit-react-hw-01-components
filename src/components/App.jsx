import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Section from "./Section/Section";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
export const App = () => {
  return (
    <div>
        <Section
        title='Task 1. Profile'
      >
       <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}/>
      </Section>

      <Section
        title='Task 2. Statistics'
      >
        <Statistics
          statisticList={data}
        />
      </Section>

      <Section
        title='Task 3. Friend list'
      >
        <FriendList
          friends={friends}
        />
      </Section>

      <Section
        title='Task 4. Transaction history'
      >
        <TransactionHistory
          items={transactions}
        />
      </Section>
    </div>
  );
};
