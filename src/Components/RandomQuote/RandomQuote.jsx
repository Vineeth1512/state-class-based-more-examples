import React, { Component } from "react";
import "./RandomQuote.css";
export default class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: "Practice Makes Man Perfect",
    };
  }
  handleQuoteGenerator = () => {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Your limitation—it’s only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Sometimes later becomes never. Do it now.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Success doesn’t just find you. You have to go out and get it.",
      "The harder you work for something, the greater you’ll feel when you achieve it.",
      "Dream bigger. Do bigger.",
      "Don’t stop when you’re tired. Stop when you’re done.",
      "Wake up with determination. Go to bed with satisfaction.",
      "Do something today that your future self will thank you for.",
      "Little things make big days.",
      "It’s going to be hard, but hard does not mean impossible.",
      "Don’t wait for opportunity. Create it.",
      "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
      "The key to success is to focus on goals, not obstacles.",
      "Success is what comes after you stop making excuses.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "Work hard in silence, let your success be the noise.",
      "You don’t have to be great to start, but you have to start to be great.",
      "Start where you are. Use what you have. Do what you can.",
      "The future depends on what you do today.",
      "Don’t be afraid to give up the good to go for the great.",
      "Opportunities don’t happen, you create them.",
      "Everything you’ve ever wanted is on the other side of fear.",
      "You are stronger than you think.",
      "Stay positive. Work hard. Make it happen.",
      "Discipline is the bridge between goals and accomplishment.",
      "Believe in yourself and all that you are.",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);

    this.setState({ quote: quotes[randomIndex] });
  };

  render() {
    return (
      <div className="quote-container">
        <h1>{this.state.quote}</h1>
        <button onClick={this.handleQuoteGenerator}>QuoteGenerator</button>
      </div>
    );
  }
}
