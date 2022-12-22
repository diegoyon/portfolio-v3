import highground from '../images/high-ground.png';
import budget from '../images/budget.png';
import shows from '../images/tv-shows.png';

const ProjectsData = [
  {
    title: 'BudgetApp',
    gitHub: 'https://github.com/diegoyon/BudgetApp',
    live: 'https://budget-app-md2l.onrender.com/',
    description: [
      'BudgetApp is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    ],
    skills: ['Ruby On Rails', 'PostgreSQL', 'HTML', 'CSS'],
    image: budget,
  },
  // {
  //   title: 'Officeverse',
  //   gitHub: 'https://github.com/Fourteen98/officeverse-frontend',
  //   live: 'pending',
  //   description:
  //     'Individuals, small and big teams gain access to space that is both more customized than coffee shops and cheaper than full leases, and coworking businesses get to rent out their unused office space and foster a community of growth and innovation.',
  //   skills: ['React', 'Redux', 'Ruby On Rails', 'Tailwind'],
  // },
  {
    title: 'High Ground Fitness Competition',
    gitHub: 'https://github.com/diegoyon/highground',
    live: 'http://highgroundfitnesscompetition.com/',
    description: [
      'Website that displays information about a CrossFit competition.',
      "It let the users know more about the competition, its workouts and the athletes' leaderboard. Built with React.",
    ],
    skills: ['React'],
    image: highground,
  },
  {
    title: 'Crypto App',
    gitHub: 'https://github.com/diegoyon/cryptoapp',
    live: 'https://diegoyon-crytoapp.netlify.app/',
    description: [
      'The CrytoApp is a single page application that consumes an API that contains updated information about cryptocurrencies data.',
      'Currencies displayed can be filtered by ranking, price or percentage change. It also shows more detail information about each crytocurrency including a graph showing the price movement.',
    ],
    skills: ['React', 'Redux', 'API'],
    image: highground,
  },
  // {
  //   title: 'Recipe App',
  //   gitHub: 'https://github.com/diegoyon/recipe-app',
  //   live: 'https://recipe-rails-project.onrender.com/users/sign_in',
  //   description:
  //     'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Built with Ruby on Rails.',
  //   skills: ['Ruby On Rails'],
  // },
  {
    title: 'TV Shows Web App',
    gitHub: 'https://github.com/williamscch/tv-shows',
    live: 'https://williamscch.github.io/tv-shows/dist/',
    description: [
      'A web application based on an external API which contains information about TV shows.',
      'The web app let you like the shows that you like the most and comment what you think about them making use of an involvement API to save this interaction information.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'API', 'Webpack'],
    image: shows,
  },
];

export default ProjectsData;
