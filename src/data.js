import birthdayImg from "../assets/Birthdays.png"
import vehiclesImg from "../assets/Cars.png"
import eventImg from "../assets/event.png"
import funImg from "../assets/fun.png"
import gadgetsImg from "../assets/gadgets.png"
import servicesImg from "../assets/services.png"
import { daysLeftForBDay } from "./utils/services"


export const EVENTS_DATA = [
  {
    id: 501,
    title: "Going for hiking",
    date: "2022-12-20"
  },
  {
    id: 502,
    title: "Party night at home",
    date: "2022-12-29"
  },
  {
    id: 503,
    title: "Someone's wedding",
    date: "2023-01-01"
  }
]

export const HOME_DATA = [
  {
    id: 1,
    title: "Birthdays",
    code: '#1abc9c',
    image: birthdayImg,
    details:{
      birthdays: [
        {
          id: 101,
          name: "Asif Siddique",
          date: "1998-12-08",
          daysLeft: daysLeftForBDay("1998-12-08")
        },
        {
          id: 102,
          name: "Zubair Siddique",
          date: "2000-12-07",
          daysLeft: daysLeftForBDay("2000-12-07")
        },
        {
          id: 103,
          name: "Shams Siddique",
          date: "1992-12-18",
          daysLeft: daysLeftForBDay("1992-12-18")
        }
      ],
    }
  },
  {
    id: 2,
    title: "Events",
    code: '#34495e',
    image: eventImg,
    details:{
      anniversary: [
        {
          id: 201,
          name: "ABC & DEF",
          date: "2019-12-29",
          daysLeft: daysLeftForBDay("2019-12-29")
        },
        {
          id: 202,
          name: "GHI & JKL",
          date: "2021-10-23",
          daysLeft: daysLeftForBDay("2021-10-23")
        },
        {
          id: 203,
          name: "MNO & PQR",
          date: "2022-01-03",
          daysLeft: daysLeftForBDay("2022-01-03")
        }
      ],
    }
  },
  {
    id: 3,
    title: "Vehicles",
    code: '#3498db',
    image: vehiclesImg,
    details: {
      cars: [
        {
          id: 801,
          name: "Hyundai i20",
          number: "MH-03-BS-5890",
          warrantyData: {
            insurance: {
              startDate: "2022-05-14",
              endDate: "2022-05-13",
              company: "ACKO General Insurance"
            },
            Puc: {
              startDate: "2022-06-18",
              endDate: "2022-12-17"
            },
            services: {
              lastServiceDate: "2022-11-25",
              lastServiceKms: 132000,
              nextServiceKms: 137000
            }
          }
        },
        {
          id: 802,
          name: "Suzuki Ertiga",
          number: "MH-03-BS-5890",
          warrantyData: {
            insurance: {
              startDate: "2022-05-14",
              endDate: "2022-05-13",
              company: "ACKO General Insurance"
            },
            Puc: {
              startDate: "2022-06-18",
              endDate: "2022-12-17"
            },
            services: {
              lastServiceDate: "2022-11-25",
              lastServiceKms: 132000,
              nextServiceKms: 137000
            }
          }
        }
      ],
      bikes: [
        {
          id: 803,
          name: "Pulsar NS 160",
          number: "MH-03-BS-5890",
          warrantyData: {
            insurance: {
              startDate: "2022-05-14",
              endDate: "2022-05-13",
              company: "ACKO General Insurance"
            },
            Puc: {
              startDate: "2022-06-18",
              endDate: "2022-12-17"
            },
            services: {
              lastServiceDate: "2022-11-25",
              lastServiceKms: 132000,
              nextServiceKms: 137000
            }
          }
        },
        {
          id: 804,
          name: "Aprilia SR125",
          number: "MH-03-BS-5890",
          warrantyData: {
            insurance: {
              startDate: "2022-05-14",
              endDate: "2022-05-13",
              company: "ACKO General Insurance"
            },
            Puc: {
              startDate: "2022-06-18",
              endDate: "2022-12-17"
            },
            services: {
              lastServiceDate: "2022-11-25",
              lastServiceKms: 132000,
              nextServiceKms: 137000
            }
          }
        },
        {
          id: 805,
          name: "Royal Enfield 350",
          number: "MH-03-BS-5890",
          warrantyData: {
            insurance: {
              startDate: "2022-05-14",
              endDate: "2022-05-13",
              company: "ACKO General Insurance"
            },
            Puc: {
              startDate: "2022-06-18",
              endDate: "2022-12-17"
            },
            services: {
              lastServiceDate: "2022-11-25",
              lastServiceKms: 132000,
              nextServiceKms: 137000
            }
          }
        }
      ]
    }
  },
  {
    id: 4,
    title: "Services",
    code: '#2c3e50',
    image: servicesImg,
    details: {
      birthdays: [
        {
          id: 101,
          name: "Asif Siddique",
          date: "08-12-1998"
        },
        {
          id: 102,
          name: "Zubair Siddique",
          date: "07-12-1998"
        },
        {
          id: 103,
          name: "Shams Siddique",
          date: "18-12-1998"
        }
      ],
      anniversary: [
        {
          id: 201,
          name: "ABC & DEF",
          date: "28-12-2019"
        },
        {
          id: 202,
          name: "GHI & JKL",
          date: "20-12-2019"
        },
        {
          id: 203,
          name: "MNO & PQR",
          date: "22-10-2019"
        }
      ],
    }
  },
  {
    id: 5,
    title: "Gadgets",
    code: '#7f8c8d',
    image: gadgetsImg,
    details: [
      {
        id: 301,
        header: "Asif Siddique",
        gadgets: [
          {
            id: 901,
            type: "laptop",
            name: "Macbook Air",
            warranty: false,
          },
          {
            id: 902,
            type: "mobile",
            name: "Iphone 13 Pro Max",
            warranty: true,
            warrantyTill: '2023/01/06'
          },
        ]
      },
      {
        id: 302,
        header: "Zubair Siddique",
        gadgets: [
          {
            id: 903,
            type: "laptop",
            name: "Macbook Air New",
            warranty: true,
            warrantyTill: '2023/06/26'
          },
          {
            id: 904,
            type: "mobile",
            name: "Iphone 13 Pro",
            warranty: true,
            warrantyTill: '2023/05/13'
          },
          {
            id: 905,
            type: "headphones",
            name: "Sony WF-XM4",
            warranty: true,
            warrantyTill: '2023/11/06'
          }
        ]
      },
    ]
  },
  {
    id: 6,
    title: "Fun",
    code: '#7f8c8d',
    image: funImg,
    details: [
      {
        id: 301,
        header: "Asif Siddique",
        gadgets: [
          {
            id: 901,
            type: "laptop",
            name: "Macbook Air",
            warranty: false,
          },
          {
            id: 902,
            type: "mobile",
            name: "Iphone 13 Pro Max",
            warranty: true,
            warrantyTill: '2023/01/06'
          },
        ]
      },
      {
        id: 302,
        header: "Zubair Siddique",
        gadgets: [
          {
            id: 903,
            type: "laptop",
            name: "Macbook Air New",
            warranty: true,
            warrantyTill: '2023/06/26'
          },
          {
            id: 904,
            type: "mobile",
            name: "Iphone 13 Pro",
            warranty: true,
            warrantyTill: '2023/05/13'
          },
          {
            id: 905,
            type: "headphones",
            name: "Sony WF-XM4",
            warranty: true,
            warrantyTill: '2023/11/06'
          }
        ]
      },
    ]
  }
]