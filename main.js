const nextButton = document.querySelector(".right-arrow");
const prevButton = document.querySelector(".left-arrow");
const slider = document.querySelector(".image-slider");
const title = document.querySelector(".my-title");
const quote = document.querySelector(".quote");
const randomImages = [
  {
    title: "Rough Start",
    image:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "We cannot judge fully of men's works by what we see, or what is said and thought of them; for man is prone to depreciate that which is really important, and to exact and extol what is trivial and of little worth. Many things which are hidden and unrecognized of human wisdom are nevertheless valuable and vitally important.",
  },

  {
    title: "Morning Sun",
    image:
      "https://images.pexels.com/photos/2763927/pexels-photo-2763927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "Facts mean nothing unless they are rightly understood, rightly related and rightly interpreted.",
  },

  {
    title: "By Fall",
    image:
      "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "The efforts which we make to escape from our destiny only serve to lead us into it.",
  },

  {
    title: "Time",
    image:
      "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "All my life, as down an abyss without a bottom. I have been pouring van loads of information into that vacancy of oblivion I call my mind.",
  },

  {
    title: "Never Think",
    image:
      "https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "There is nobody as enslaved as the fanatic, the person in whom one impulse, one value, has assumed ascendancy over all others.",
  },

  {
    title: "Let Me Sign",
    image:
      "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card: "It is never safe to look into the future with eyes of fear.",
  },

  {
    title: "Dickinson Bliss",
    image:
      "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "In times like these, it is helpful to remember that there have always been times like these.",
  },

  {
    title: "I Don't Know",
    image:
      "https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "The endowment and sealing ordinances of the temple are so gloriously rich in meaning that you will want to allow significant time to receive those ordinances and to ponder their meaning.",
  },

  {
    title: "Pure Love",
    image:
      "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card:
      "Man cannot pretend to be higher in ethics, spirituality, advancement, or civilisation than other creatures, and at the same time live by lower standards than the vulture or hyena.",
  },

  {
    title: "Until Tomorrow",
    image:
      "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    card: "To add a library to a house is to give that house a soul.",
  },
];

setInterval(() => {
  const randomize = Math.floor(Math.random() * randomImages.length);
  slider.style.backgroundImage = `url(${randomImages[randomize].image})`;
  title.textContent = randomImages[randomize].title;
  quote.textContent = randomImages[randomize].card;
}, 5000);
