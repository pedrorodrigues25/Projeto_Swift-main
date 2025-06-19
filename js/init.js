
function initData() {
  // USERS
  if (!localStorage.users) {
    const users = [
  {
    "userId": "u1",
    "username": "alice.smith",
    "password": "pass1",
    "email": "alice.smith@example.com",
    "coverPhoto": "https://example.com/users/alice.smith.jpg",
    "birthDate": "1996-04-03",
    "phoneNumber": "+351976058519",
    "defaultPaymentMethod": "PayPal",
    "gender": "Other",
    "quizzes": [
      {
        "idQuiz": "q1",
        "correctAnswers": 1,
        "quizMiles": 20
      }
    ]
  },
  {
    "userId": "u2",
    "username": "bob.johnson",
    "password": "pass2",
    "email": "bob.johnson@example.com",
    "coverPhoto": "https://example.com/users/bob.johnson.jpg",
    "birthDate": "1983-03-18",
    "phoneNumber": "+351940376335",
    "defaultPaymentMethod": "PayPal",
    "gender": "Other",
    "quizzes": [
      {
        "idQuiz": "q2",
        "correctAnswers": 8,
        "quizMiles": 17
      }
    ]
  },
  {
    "userId": "u3",
    "username": "charlie.brown",
    "password": "pass3",
    "email": "charlie.brown@example.com",
    "coverPhoto": "https://example.com/users/charlie.brown.jpg",
    "birthDate": "1990-02-25",
    "phoneNumber": "+351936234043",
    "defaultPaymentMethod": "Revolut",
    "gender": "Female",
    "quizzes": [
      {
        "idQuiz": "q3",
        "correctAnswers": 4,
        "quizMiles": 43
      }
    ]
  },
  {
    "userId": "u4",
    "username": "diana.taylor",
    "password": "pass4",
    "email": "diana.taylor@example.com",
    "coverPhoto": "https://example.com/users/diana.taylor.jpg",
    "birthDate": "2000-08-03",
    "phoneNumber": "+351944865616",
    "defaultPaymentMethod": "Revolut",
    "gender": "Female",
    "quizzes": [
      {
        "idQuiz": "q4",
        "correctAnswers": 7,
        "quizMiles": 61
      }
    ]
  },
  {
    "userId": "u5",
    "username": "ethan.anderson",
    "password": "pass5",
    "email": "ethan.anderson@example.com",
    "coverPhoto": "https://example.com/users/ethan.anderson.jpg",
    "birthDate": "1981-04-13",
    "phoneNumber": "+351911746601",
    "defaultPaymentMethod": "PayPal",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q5",
        "correctAnswers": 2,
        "quizMiles": 76
      }
    ]
  },
  {
    "userId": "u6",
    "username": "fiona.thomas",
    "password": "pass6",
    "email": "fiona.thomas@example.com",
    "coverPhoto": "https://example.com/users/fiona.thomas.jpg",
    "birthDate": "1990-03-30",
    "phoneNumber": "+351951442377",
    "defaultPaymentMethod": "Visa",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q6",
        "correctAnswers": 5,
        "quizMiles": 98
      }
    ]
  },
  {
    "userId": "u7",
    "username": "george.jackson",
    "password": "pass7",
    "email": "george.jackson@example.com",
    "coverPhoto": "https://example.com/users/george.jackson.jpg",
    "birthDate": "1983-10-07",
    "phoneNumber": "+351949537739",
    "defaultPaymentMethod": "Visa",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q7",
        "correctAnswers": 4,
        "quizMiles": 100
      }
    ]
  },
  {
    "userId": "u8",
    "username": "hannah.white",
    "password": "pass8",
    "email": "hannah.white@example.com",
    "coverPhoto": "https://example.com/users/hannah.white.jpg",
    "birthDate": "1991-01-18",
    "phoneNumber": "+351983133534",
    "defaultPaymentMethod": "Revolut",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q8",
        "correctAnswers": 7,
        "quizMiles": 87
      }
    ]
  },
  {
    "userId": "u9",
    "username": "ian.harris",
    "password": "pass9",
    "email": "ian.harris@example.com",
    "coverPhoto": "https://example.com/users/ian.harris.jpg",
    "birthDate": "1994-01-31",
    "phoneNumber": "+351923781706",
    "defaultPaymentMethod": "Visa",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q9",
        "correctAnswers": 9,
        "quizMiles": 28
      }
    ]
  },
  {
    "userId": "u10",
    "username": "julia.martin",
    "password": "pass10",
    "email": "julia.martin@example.com",
    "coverPhoto": "https://example.com/users/julia.martin.jpg",
    "birthDate": "2001-02-20",
    "phoneNumber": "+351941111633",
    "defaultPaymentMethod": "Revolut",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q10",
        "correctAnswers": 5,
        "quizMiles": 18
      }
    ]
  },
  {
    "userId": "u11",
    "username": "kevin.walker",
    "password": "pass11",
    "email": "kevin.walker@example.com",
    "coverPhoto": "https://example.com/users/kevin.walker.jpg",
    "birthDate": "1982-08-27",
    "phoneNumber": "+351954586468",
    "defaultPaymentMethod": "Mastercard",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q11",
        "correctAnswers": 5,
        "quizMiles": 37
      }
    ]
  },
  {
    "userId": "u12",
    "username": "laura.young",
    "password": "pass12",
    "email": "laura.young@example.com",
    "coverPhoto": "https://example.com/users/laura.young.jpg",
    "birthDate": "1989-10-04",
    "phoneNumber": "+351971550814",
    "defaultPaymentMethod": "PayPal",
    "gender": "Female",
    "quizzes": [
      {
        "idQuiz": "q12",
        "correctAnswers": 7,
        "quizMiles": 77
      }
    ]
  },
  {
    "userId": "u13",
    "username": "martin.allen",
    "password": "pass13",
    "email": "martin.allen@example.com",
    "coverPhoto": "https://example.com/users/martin.allen.jpg",
    "birthDate": "1980-08-21",
    "phoneNumber": "+351941353333",
    "defaultPaymentMethod": "Visa",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q13",
        "correctAnswers": 9,
        "quizMiles": 94
      }
    ]
  },
  {
    "userId": "u14",
    "username": "nina.king",
    "password": "pass14",
    "email": "nina.king@example.com",
    "coverPhoto": "https://example.com/users/nina.king.jpg",
    "birthDate": "1999-10-31",
    "phoneNumber": "+351973377429",
    "defaultPaymentMethod": "Mastercard",
    "gender": "Female",
    "quizzes": [
      {
        "idQuiz": "q14",
        "correctAnswers": 4,
        "quizMiles": 62
      }
    ]
  },
  {
    "userId": "u15",
    "username": "oscar.wright",
    "password": "pass15",
    "email": "oscar.wright@example.com",
    "coverPhoto": "https://example.com/users/oscar.wright.jpg",
    "birthDate": "1999-01-24",
    "phoneNumber": "+351921624824",
    "defaultPaymentMethod": "Revolut",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q15",
        "correctAnswers": 6,
        "quizMiles": 32
      }
    ]
  },
  {
    "userId": "u16",
    "username": "paula.scott",
    "password": "pass16",
    "email": "paula.scott@example.com",
    "coverPhoto": "https://example.com/users/paula.scott.jpg",
    "birthDate": "1996-03-22",
    "phoneNumber": "+351927519546",
    "defaultPaymentMethod": "Visa",
    "gender": "Other",
    "quizzes": [
      {
        "idQuiz": "q16",
        "correctAnswers": 2,
        "quizMiles": 36
      }
    ]
  },
  {
    "userId": "u17",
    "username": "quinn.green",
    "password": "pass17",
    "email": "quinn.green@example.com",
    "coverPhoto": "https://example.com/users/quinn.green.jpg",
    "birthDate": "1999-02-27",
    "phoneNumber": "+351931683598",
    "defaultPaymentMethod": "Mastercard",
    "gender": "Male",
    "quizzes": [
      {
        "idQuiz": "q17",
        "correctAnswers": 8,
        "quizMiles": 83
      }
    ]
  },
  {
    "userId": "u18",
    "username": "rachel.adams",
    "password": "pass18",
    "email": "rachel.adams@example.com",
    "coverPhoto": "https://example.com/users/rachel.adams.jpg",
    "birthDate": "1992-02-25",
    "phoneNumber": "+351926866878",
    "defaultPaymentMethod": "Revolut",
    "gender": "Other",
    "quizzes": [
      {
        "idQuiz": "q18",
        "correctAnswers": 5,
        "quizMiles": 45
      }
    ]
  },
  {
    "userId": "u19",
    "username": "sam.baker",
    "password": "pass19",
    "email": "sam.baker@example.com",
    "coverPhoto": "https://example.com/users/sam.baker.jpg",
    "birthDate": "2002-11-30",
    "phoneNumber": "+351919753606",
    "defaultPaymentMethod": "Visa",
    "gender": "Other",
    "quizzes": [
      {
        "idQuiz": "q19",
        "correctAnswers": 5,
        "quizMiles": 59
      }
    ]
  },
  {
    "userId": "u20",
    "username": "tina.carter",
    "password": "pass20",
    "email": "tina.carter@example.com",
    "coverPhoto": "https://example.com/users/tina.carter.jpg",
    "birthDate": "2003-05-25",
    "phoneNumber": "+351922522054",
    "defaultPaymentMethod": "Mastercard",
    "gender": "Female",
    "quizzes": [
      {
        "idQuiz": "q20",
        "correctAnswers": 2,
        "quizMiles": 98
      }
    ]
  }
];
    localStorage.setItem("users", JSON.stringify(users));
  }

  // DESTINATIONS
  if (!localStorage.destinations) {
    const destinations = [
  {
    "idDestination": "d1",
    "tourism": ["architectural", "gastronomic", "beaches"],
"name": "Lisbon",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 302.82,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      },
      {
        "airCompany": "Ryanair",
        "price": 56.53,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      },
      {
        "airCompany": "Ryanair",
        "price": 266.77,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      },
      {
        "airCompany": "Ryanair",
        "price": 353.09,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      }
    ]
  },
  {
    "idDestination": "d2",
    "tourism": ["architectural", "gastronomic", "religious"],
"name": "Paris",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 331.88,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "easyJet",
        "price": 130.4,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "easyJet",
        "price": 72.87,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 158.66,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "easyJet",
        "price": 317.23,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      }
    ]
  },
  {
    "idDestination": "d3",
    "tourism": ["religious", "architectural", "gastronomic"],
"name": "Rome",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 144.48,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 78.71,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 204.15,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 262.56,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 328.31,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d4",
    "tourism": ["architectural", "adventure"],
"name": "Berlin",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 345.08,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 262.6,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 182.27,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d5",
    "tourism": ["architectural", "gastronomic"],
"name": "Madrid",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 224.68,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 78.98,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "British Airways",
        "price": 30.98,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 434.65,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "Ryanair",
        "price": 300.99,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      }
    ]
  },
  {
    "idDestination": "d6",
    "tourism": ["architectural", "religious"],
"name": "Vienna",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 165.96,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 364.83,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 44.53,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d7",
    "tourism": ["architectural", "adventure", "gastronomic"],
"name": "Amsterdam",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 90.95,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 162.08,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 122.56,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 188.98,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 373.88,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      }
    ]
  },
  {
    "idDestination": "d8",
    "tourism": ["architectural", "religious"],
"name": "Prague",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 310.16,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 320.59,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "easyJet",
        "price": 248.67,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d9",
    "tourism": ["architectural", "adventure"],
"name": "Budapest",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 54.38,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 214.09,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 254.5,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 108.65,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 120.87,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      }
    ]
  },
  {
    "idDestination": "d10",
    "tourism": ["beaches", "architectural", "gastronomic"],
"name": "Barcelona",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 332.43,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 235.98,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      },
      {
        "airCompany": "Ryanair",
        "price": 182.9,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      }
    ]
  },
  {
    "idDestination": "d11",
    "tourism": ["architectural", "adventure"],
"name": "Copenhagen",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 190.55,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 156.71,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 238.92,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 171.32,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "easyJet",
        "price": 395.89,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      }
    ]
  },
  {
    "idDestination": "d12",
    "tourism": ["architectural", "adventure"],
"name": "Stockholm",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 220.42,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 416.61,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 230.69,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 51.8,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      }
    ]
  },
  {
    "idDestination": "d13",
    "tourism": ["gastronomic", "architectural"],
"name": "Dublin",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 180.95,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 241.37,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 51.89,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 199.38,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      }
    ]
  },
  {
    "idDestination": "d14",
    "tourism": ["architectural", "gastronomic"],
"name": "Brussels",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 46.12,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 100.54,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 139.07,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      }
    ]
  },
  {
    "idDestination": "d15",
    "tourism": ["religious", "architectural"],
"name": "Athens",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 254.71,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 287.38,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "easyJet",
        "price": 55.2,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 188.92,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 47.12,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      }
    ]
  },
  {
    "idDestination": "d16",
    "tourism": ["adventure", "architectural"],
    "name": "Oslo",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 172.52,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "Ryanair",
        "price": 443.07,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "easyJet",
        "price": 316.54,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "easyJet",
        "price": 129.44,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 100.66,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      }
    ]
  },
  {
    "idDestination": "d17",
    "tourism": ["adventure", "architectural"],
    "name": "Helsinki",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 157.98,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 31.59,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 132.09,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 229.2,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 400.7,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      }
    ]
  },
  {
    "idDestination": "d18",
    "tourism": ["architectural", "religious"],
    "name": "Warsaw",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 75.27,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "British Airways",
        "price": 184.25,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 320.54,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 335.04,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      }
    ]
  },
  {
    "idDestination": "d19",
    "tourism": ["architectural", "adventure"],
    "name": "Zurich",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 320.46,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "Ryanair",
        "price": 273.55,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 265.19,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      }
    ]
  },
  {
    "idDestination": "d20",
    "tourism": ["architectural", "gastronomic"],
    "name": "Munich",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 436.99,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "Ryanair",
        "price": 63.48,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 354.99,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 282.81,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      }
    ]
  }
];
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }

  // REVIEWS
  if (!localStorage.reviews) {
    const reviews = [
  {
    "idReview": "r1",
    "idDestination": "d12",
    "userName": "bob.johnson",
    "userCoverPhoto": "https://example.com/users/bob.johnson.jpg",
    "text": "Enjoyed the boat tours and old town charm.",
    "images": [
      "https://example.com/reviews/d12_0.jpg"
    ]
  },
  {
    "idReview": "r2",
    "idDestination": "d4",
    "userName": "charlie.brown",
    "userCoverPhoto": "https://example.com/users/charlie.brown.jpg",
    "text": "A photographer's paradise!",
    "images": [
      "https://example.com/reviews/d4_1.jpg"
    ]
  },
  {
    "idReview": "r3",
    "idDestination": "d5",
    "userName": "paula.scott",
    "userCoverPhoto": "https://example.com/users/paula.scott.jpg",
    "text": "Friendly locals and great coffee spots.",
    "images": [
      "https://example.com/reviews/d5_2.jpg"
    ]
  },
  {
    "idReview": "r4",
    "idDestination": "d11",
    "userName": "laura.young",
    "userCoverPhoto": "https://example.com/users/laura.young.jpg",
    "text": "Loved the local food and culture.",
    "images": [
      "https://example.com/reviews/d11_3.jpg"
    ]
  },
  {
    "idReview": "r5",
    "idDestination": "d9",
    "userName": "quinn.green",
    "userCoverPhoto": "https://example.com/users/quinn.green.jpg",
    "text": "Perfect mix of modern and historical vibes.",
    "images": [
      "https://example.com/reviews/d9_4.jpg"
    ]
  },
  {
    "idReview": "r6",
    "idDestination": "d7",
    "userName": "sam.baker",
    "userCoverPhoto": "https://example.com/users/sam.baker.jpg",
    "text": "Enjoyed the boat tours and old town charm.",
    "images": [
      "https://example.com/reviews/d7_5.jpg"
    ]
  },
  {
    "idReview": "r7",
    "idDestination": "d19",
    "userName": "alice.smith",
    "userCoverPhoto": "https://example.com/users/alice.smith.jpg",
    "text": "Loved the local food and culture.",
    "images": [
      "https://example.com/reviews/d19_6.jpg"
    ]
  },
  {
    "idReview": "r8",
    "idDestination": "d17",
    "userName": "julia.martin",
    "userCoverPhoto": "https://example.com/users/julia.martin.jpg",
    "text": "The museums and parks were top-notch.",
    "images": [
      "https://example.com/reviews/d17_7.jpg"
    ]
  },
  {
    "idReview": "r9",
    "idDestination": "d16",
    "userName": "diana.taylor",
    "userCoverPhoto": "https://example.com/users/diana.taylor.jpg",
    "text": "Perfect mix of modern and historical vibes.",
    "images": [
      "https://example.com/reviews/d16_8.jpg"
    ]
  },
  {
    "idReview": "r10",
    "idDestination": "d8",
    "userName": "paula.scott",
    "userCoverPhoto": "https://example.com/users/paula.scott.jpg",
    "text": "Public transport was very convenient.",
    "images": [
      "https://example.com/reviews/d8_9.jpg"
    ]
  },
  {
    "idReview": "r11",
    "idDestination": "d2",
    "userName": "julia.martin",
    "userCoverPhoto": "https://example.com/users/julia.martin.jpg",
    "text": "Crowded but totally worth it!",
    "images": [
      "https://example.com/reviews/d2_10.jpg"
    ]
  },
  {
    "idReview": "r12",
    "idDestination": "d13",
    "userName": "paula.scott",
    "userCoverPhoto": "https://example.com/users/paula.scott.jpg",
    "text": "Public transport was very convenient.",
    "images": [
      "https://example.com/reviews/d13_11.jpg"
    ]
  },
  {
    "idReview": "r13",
    "idDestination": "d15",
    "userName": "quinn.green",
    "userCoverPhoto": "https://example.com/users/quinn.green.jpg",
    "text": "A photographer's paradise!",
    "images": [
      "https://example.com/reviews/d15_12.jpg"
    ]
  },
  {
    "idReview": "r14",
    "idDestination": "d19",
    "userName": "quinn.green",
    "userCoverPhoto": "https://example.com/users/quinn.green.jpg",
    "text": "The museums and parks were top-notch.",
    "images": [
      "https://example.com/reviews/d19_13.jpg"
    ]
  },
  {
    "idReview": "r15",
    "idDestination": "d4",
    "userName": "ian.harris",
    "userCoverPhoto": "https://example.com/users/ian.harris.jpg",
    "text": "Great nightlife and beautiful architecture.",
    "images": [
      "https://example.com/reviews/d4_14.jpg"
    ]
  },
  {
    "idReview": "r16",
    "idDestination": "d2",
    "userName": "quinn.green",
    "userCoverPhoto": "https://example.com/users/quinn.green.jpg",
    "text": "Great nightlife and beautiful architecture.",
    "images": [
      "https://example.com/reviews/d2_15.jpg"
    ]
  },
  {
    "idReview": "r17",
    "idDestination": "d18",
    "userName": "kevin.walker",
    "userCoverPhoto": "https://example.com/users/kevin.walker.jpg",
    "text": "Public transport was very convenient.",
    "images": [
      "https://example.com/reviews/d18_16.jpg"
    ]
  },
  {
    "idReview": "r18",
    "idDestination": "d6",
    "userName": "martin.allen",
    "userCoverPhoto": "https://example.com/users/martin.allen.jpg",
    "text": "Crowded but totally worth it!",
    "images": [
      "https://example.com/reviews/d6_17.jpg"
    ]
  },
  {
    "idReview": "r19",
    "idDestination": "d18",
    "userName": "quinn.green",
    "userCoverPhoto": "https://example.com/users/quinn.green.jpg",
    "text": "Perfect mix of modern and historical vibes.",
    "images": [
      "https://example.com/reviews/d18_18.jpg"
    ]
  },
  {
    "idReview": "r20",
    "idDestination": "d1",
    "userName": "george.jackson",
    "userCoverPhoto": "https://example.com/users/george.jackson.jpg",
    "text": "Friendly locals and great coffee spots.",
    "images": [
      "https://example.com/reviews/d1_19.jpg"
    ]
  },
  {
    "idReview": "r21",
    "idDestination": "d15",
    "userName": "ethan.anderson",
    "userCoverPhoto": "https://example.com/users/ethan.anderson.jpg",
    "text": "Enjoyed the boat tours and old town charm.",
    "images": [
      "https://example.com/reviews/d15_20.jpg"
    ]
  },
  {
    "idReview": "r22",
    "idDestination": "d11",
    "userName": "rachel.adams",
    "userCoverPhoto": "https://example.com/users/rachel.adams.jpg",
    "text": "Public transport was very convenient.",
    "images": [
      "https://example.com/reviews/d11_21.jpg"
    ]
  },
  {
    "idReview": "r23",
    "idDestination": "d2",
    "userName": "ian.harris",
    "userCoverPhoto": "https://example.com/users/ian.harris.jpg",
    "text": "Great nightlife and beautiful architecture.",
    "images": [
      "https://example.com/reviews/d2_22.jpg"
    ]
  },
  {
    "idReview": "r24",
    "idDestination": "d15",
    "userName": "kevin.walker",
    "userCoverPhoto": "https://example.com/users/kevin.walker.jpg",
    "text": "Amazing city with rich history!",
    "images": [
      "https://example.com/reviews/d15_23.jpg"
    ]
  },
  {
    "idReview": "r25",
    "idDestination": "d17",
    "userName": "martin.allen",
    "userCoverPhoto": "https://example.com/users/martin.allen.jpg",
    "text": "The museums and parks were top-notch.",
    "images": [
      "https://example.com/reviews/d17_24.jpg"
    ]
  },
  {
    "idReview": "r26",
    "idDestination": "d20",
    "userName": "ian.harris",
    "userCoverPhoto": "https://example.com/users/ian.harris.jpg",
    "text": "Great nightlife and beautiful architecture.",
    "images": [
      "https://example.com/reviews/d20_25.jpg"
    ]
  },
  {
    "idReview": "r27",
    "idDestination": "d18",
    "userName": "sam.baker",
    "userCoverPhoto": "https://example.com/users/sam.baker.jpg",
    "text": "Loved the local food and culture.",
    "images": [
      "https://example.com/reviews/d18_26.jpg"
    ]
  },
  {
    "idReview": "r28",
    "idDestination": "d3",
    "userName": "tina.carter",
    "userCoverPhoto": "https://example.com/users/tina.carter.jpg",
    "text": "Public transport was very convenient.",
    "images": [
      "https://example.com/reviews/d3_27.jpg"
    ]
  },
  {
    "idReview": "r29",
    "idDestination": "d14",
    "userName": "oscar.wright",
    "userCoverPhoto": "https://example.com/users/oscar.wright.jpg",
    "text": "Loved the local food and culture.",
    "images": [
      "https://example.com/reviews/d14_28.jpg"
    ]
  },
  {
    "idReview": "r30",
    "idDestination": "d6",
    "userName": "kevin.walker",
    "userCoverPhoto": "https://example.com/users/kevin.walker.jpg",
    "text": "Perfect mix of modern and historical vibes.",
    "images": [
      "https://example.com/reviews/d6_29.jpg"
    ]
  }
];
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }
}

initData();