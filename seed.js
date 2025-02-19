const mongoose = require("mongoose");
const Quotes = require("./models/Quotes");

let dummyQuotes = [
  {
    author: "Acharya Prashant",
    text: "Mujhe ye mat batao ki tum kya-kya jante ho, Mujhe ye batao ki tum kese jeete ho.",
  },
  {
    author: "J. K. Rowling",
    text: "Only our choices reveal who we really are, much more than our abilities.",
  },
  {
    author: "A wise man said",
    text: " Don't be afraid to start over again. This time, you are not starting from Scratch. You are starting from experience.",
  },
  {
    author: "Sandeep Jain",
    text: "Comfort is a silent killer, it can destroy the greatest minds.",
  },
  {
    author: "P.T. Barnum",
    text: "Money is a terrible master but an excellent servant.",
  },
  {
    author: "Napoleon Hill",
    text: "Strength and growth come only through continuous effort and struggle.",
  },
  {
    author: "Bill Gates",
    text: "Your most unhappy customers are your greatest source of learning.",
  },
];

async function seedDB() {
  await Quotes.insertMany(dummyQuotes);
}
module.exports = seedDB;
