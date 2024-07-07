import React from 'react';
import './Features.css';
import growTogether from '../assets/images/illustration-grow-together.svg';
import flowingConversation from '../assets/images/illustration-flowing-conversation.svg';
import yourUsers from '../assets/images/illustration-your-users.svg';

const Features = () => (
  <section className="features">
    <div className="feature-item">
      <div className="feature-text">
        <h2>Grow Together</h2>
        <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
      </div>
      <img src={growTogether} alt="Grow Together" />
    </div>
    <div className="feature-item">
      <img src={flowingConversation} alt="Flowing Conversations" />
      <div className="feature-text">
        <h2>Flowing Conversations</h2>
        <p>You wouldn&apos;t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
      </div>
    </div>
    <div className="feature-item">
      <div className="feature-text">
        <h2>Your Users</h2>
        <p>It takes no time at all to integrate Huddle with your app&apos;s authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
      </div>
      <img src={yourUsers} alt="Your Users" />
    </div>
  </section>
);

export default Features;
