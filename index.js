let quotes = [
  "Give people what they need: food, medicine, clean air, pure water, trees and grass, pleasant homes to live in, some hours of work, more hours of leisure. Don't ask who deserves it. Every human being deserves it. - Howard Zinn, Marx in Soho",
  "It's not, 'Do we owe things to each other?' It's 'This is what we owe to each other.'",
  "I argue that we choose to be good because of our bonds with other people and our innate desire to treat them with dignity. Simply put, we are not in this alone. - Chidi Anagonye",
];
function pickThatQuote() {
  let choose = Math.floor(Math.random() * 3);
  console.log(choose);
  return choose;
}
console.log(quotes[pickThatQuote()]);
