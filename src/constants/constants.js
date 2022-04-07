import logo from "../images/logo.svg";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
export const navOptions = [
	{
		key: 1,
		content: 'The Problem',
		href: '#problem'
	},
	{
		key: 2,
		content: 'Sustainable Solution',
		href: '#solution'
	},
	{
		key: 3,
		content: 'Impact',
		href: '#impact'
	},
	{
		key: 4,
		content: 'Pricing',
		href: '#pricing'
	},
	{
		key: 5,
		content: 'Team',
		href: '#team'
	},
	{
		key: 6,
		content: 'Contacts',
		href: '#footer'
	}
]
export const chatHistory = [
  {
    content: "What do you do?",
    bubble: "chat__bubble_user",
    text: ""
  },
  {
    content: "We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant",
    bubble: "chat__bubble_acc",
    text: "chat__message_highlight"
  },
  {
    content: "Awesome!",
    bubble: "chat__bubble_user",
    text: ""
  },
  {
    content: "I want to work with you!",
    bubble: "chat__bubble_user chat__bubble_highlight",
    text: "chat__message_highlight"
  },
  {
    content: "Cool! We operate in Singapore and are planning to open in Many onther countires soon!",
    bubble: "chat__bubble_acc",
    text: "chat__message_highlight"
  },
]
export const problems = [
	{
		id: 1,
		text: 'Single-use plastics pollute oceans and kill marine species',
		src: '../images/turtle.svg',
		alt: 'turtle',
	},
	{
		id: 2,
		text: 'Single-use plastics pollute landfills and emit dangerous chemicals and greenshouse gases',
		src: '../images/trashpile.svg',
		alt: 'trashpile',
	},
	{
		id: 3,
		text: 'Not all of the single-use plastics are recyclable',
		src: '../images/plasticSorting.svg',
		alt: 'plasticSorting',
	},
];
export const cardList = [
  {
    key: 1,
    image: card1,
    features: [
      "Removable/adjustable divider",
      "Leak-resistant lid keeps food fresh",
      "Rectangle shapes stack to save storage space",
      "Easy to sanitize and dishwasher safe",
      "Containers and lids are freezer safe",
      "Containers are oven safe up to 300 degrees",
      "Lighter and sturdier than glass",
      "Etched tare weights for easy bulk shopping",
      "304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider",
      "Free of BPA, BPS, phthalates and lead",
    ],
    sizing: [
      "25oz container size with lid on: 7.75” x 1.75” x 5” Lids: 7.75” x 5”",
    ]
  },
  {
    key: 2,
    image: card2,
    features: [
      "Leak-resistant lid keeps food fresh",
      "Easy to sanitize and dishwasher safe",
      "Containers and lids are freezer safe",
      "Containers are oven safe up to 300 degrees",
      "Three containers nest to save storage space",
      "Lighter and sturdier than glass",
      "Etched tare weights for easy bulk shopping",
      "304 (18/8) stainless steel, LDPE #4 plastic",
      "Free of BPA, BPS, phthalates and lead",
    ],
    sizing: [
      "16oz, container size with lid on: 4-5/8” x 2.25”. Lid is 4.75” diameter",
      "9oz, container size with lid on: 4” x 2”. Lid is 4” diameter",
      "5oz, container size with lid on: 3.5” x 1.5”. Lid is 3.5” diameter",
    ]
  },
  {
    key: 3,
    image: card3,
    features: [
      "Removable 2-section + 4-section divider",
      "Leak-resistant lid keeps food fresh",
      "Easy to sanitize and dishwasher safe",
      "Containers and lids are freezer safe",
      "Containers are oven safe up to 300 degrees",
      "Lighter and sturdier than glass",
      "Etched tare weights for easy bulk shopping",
      "304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider",
      "Free of BPA, BPS, phthalates and lead",
    ],
    sizing: [
      "100oz (3 liters, 12.5 cups), 9.5” x 3.25”",
    ]
  }
];
export const cards = [
  {
    key: 1,
    decoration: "impact__bars",
    header: "For Businesses",
    text: [
      "Save at least 50% on supply cost",
      "Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking",
      "Save real estate cost for storage",
      "Government helps Subsidize Up to 70%"
    ]
  },
  {
    key: 2,
    decoration: "impact__circles",
    header: "For Users",
    text: [
      "Remove all chemicals going into food: plastics, BPA, PFAS and other ‘forever chemicals’ used to hold compostable packaging together",
      "Gamification: reward for returned containers",
      "Sustainability sells: users feel good about helping the planet"
    ]
  }
];
export const table = [
  {
    key: 1,
    content: logo,
    cclass: "impact__table-logo",
    tclass: "impact__table-cell"
  },  
  {
    key: 2,
    content: "Awesome Container Company",
    cclass: "impact__table-text impact__table-text_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 3,
    content: "Deliver Zero",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 4,
    content: "Logistics Company",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 5,
    content: "Washing Facility",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 6,
    content: "Single-use plastics",
    cclass: "impact__table-text",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 7,
    content: "Save over 50% on supply costs",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 8,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 9,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 10,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 11,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 12,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 13,
    content: "Save real estate storage costs",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 14,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 15,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell"
  },
  {
    key: 16,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 17,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 18,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 19,
    content: "Inventory management",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 20,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 21,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 22,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 23,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 24,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 25,
    content: "Never reorder supplies",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 26,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 27,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 28,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 29,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 30,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 31,
    content: "Easy pickup and delivery",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 32,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 33,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 34,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell"
  },
  {
    key: 35,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell"
  },
  {
    key: 36,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 37,
    content: "Sustainable products",
    cclass: "impact__table-text",
    tclass: "impact__table-cell"
  },
  {
    key: 38,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell"
  },
  {
    key: 39,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 40,
    content: "",
    cclass: "",
    tclass: "impact__table-cell"
  },
  {
    key: 41,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell"
  },
  {
    key: 42,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_end"
  },
  {
    key: 43,
    content: "App for tracking and reporting",
    cclass: "impact__table-text",
    tclass: "impact__table-cell impact__table-cell_bottom"
  },
  {
    key: 44,
    content: "",
    cclass: "impact__table-dot_highlight",
    tclass: "impact__table-cell impact__table-cell_bottom"
  },
  {
    key: 45,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_bottom"
  },
  {
    key: 46,
    content: "",
    cclass: "impact__table-dot",
    tclass: "impact__table-cell impact__table-cell_bottom"
  },
  {
    key: 47,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_bottom"
  },
  {
    key: 48,
    content: "",
    cclass: "",
    tclass: "impact__table-cell impact__table-cell_none"
  },
];
export const team = [
	{
		id: 1,
		src: '../images/Hung.svg',
		name: 'Hung Lam',
		title: 'Founder / CEO',
		linkedIn: '../images/linkedIn.svg',
	},
	{
		id: 1,
		src: '../images/Edwin.svg',
		name: 'Edwin Phua',
		title: 'Co-founder / COO',
		linkedIn: '../images/linkedIn.svg',
	},
	{
		id: 1,
		src: '../images/Catella.svg',
		name: 'Guillaume Catella',
		title: 'Co-founder / CTO',
		linkedIn: '../images/linkedIn.svg',
	},
];
export const partners = [
	{
		id: 1,
		src: '../images/chefatwork.svg',
		link: '',
	},
	{
		id: 1,
		src: '../images/stewards.svg',
		link: '',
	},
	{
		id: 1,
		src: '../images/ninjavan.svg',
		link: '',
	},
	{
		id: 1,
		src: '../images/creatella.svg',
		link: '',
	},
	{
		id: 1,
		src: '../images/goa.svg',
		link: '',
	},
];
