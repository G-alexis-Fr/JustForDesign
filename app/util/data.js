import { images } from '../global/globalStyles'

const itemFirstList = [
  {
    id: 1,
    image: images.burger,
    title: 'Offers',
  },
  {
    id: 2,
    image: images.rice,
    title: 'Sri Lanka',
  },
  {
    id: 3,
    image: images.fruit,
    title: 'Italian',
  },
  {
    id: 4,
    image: images.pasta,
    title: 'Indian',
  },
]

const itemMiddleList = [
  {
    id: 11,
    image: require('../assets/Mid/pizza.png'),
    title: 'Minute by tuk tuk',
    rate: '4.9',
    comment: '124',
  },
  {
    id: 22,
    image: require('../assets/Mid/breakfast.png'),
    title: 'Cafe Noir',
    rate: '4.7',
    comment: '120',
  },
  {
    id: 33,
    image: require('../assets/Mid/bread.png'),
    title: 'Bakes by Tella',
    rate: '4.6',
    comment: '144',
  },
]

const itemThirdList = [
  {
    id: 111,
    image: require('../assets/mid2/pizza.png'),
    title: 'Cafe De Bambaa',
    rate: '4.9',
  },
  {
    id: 222,
    image: require('../assets/mid2/fruit.png'),
    title: 'Burger By Bee',
    rate: '4.7',
  },
]

const itemBottomList = [
  {
    id: 14,
    image: require('../assets/Bottom/pizz.png'),
    title: 'Mulberry Pizza by Josh',
    rate: '4.9',
    comment: '124',
  },
  {
    id: 22,
    image: require('../assets/Bottom/caf.png'),
    title: 'Barita',
    rate: '4.7',
    comment: '120',
  },
  {
    id: 33,
    image: require('../assets/Bottom/pizz2.png'),
    title: 'Pizza Rush Hour',
    rate: '4.6',
    comment: '144',
  },
]

const itemSecPage = [
  {
    id: 14,
    image: require('../assets/SecPage/frite.png'),
    title: 'Food',
    comment: '120',
  },
  {
    id: 22,
    image: require('../assets/SecPage/cafe.png'),
    title: 'Beverages',
    comment: '220',
  },
  {
    id: 33,
    image: require('../assets/SecPage/glace.png'),
    title: 'Desserts',

    comment: '155',
  },
  {
    id: 34,
    image: require('../assets/SecPage/burger.png'),
    title: 'Promotions',
    comment: '25',
  },
]

export default {
  itemFirstList,
  itemMiddleList,
  itemThirdList,
  itemBottomList,
  itemSecPage
}
