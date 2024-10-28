// //  Destructuring OBject and arrays

// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: {
//       name: "New York",
//       population: 8_550_000,
//     },
//     state: "NY",
//   },
// };
// let state = "UZB";

// let {
//   name: names,
//   age,
//   address: {
//     state: country,
//     city: { name: cityName, population },
//     street,
//   },
// } = person;
// let name = "Test";

// console.log(population);

// let longUserObject = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: {
//       name: "New York",
//       population: 8_550_000,
//     },
//     state: "NY",
//   },
//   hobbies: {
//     sports: "basketball",
//     music: "classical",
//   },
//   friends: {
//     friend1: { name: "Alice", age: 25 },
//     friend2: { name: "Bob", age: 35 },
//   },
// };

// let user = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//     country: "USA",
//   },
//   hobbies: "John",
//   friends: {
//     friend1: "Alice",
//     friend2: "Bob",
//   },
// };

// let veryLongUnivercityObject = {

// }

const university = {
  name: "Tech Valley University",
  location: {
    address: {
      city: "Innovate City",
      state: {
        name: "Futureland",
        code: "FL",
      },
      country: {
        name: "Techlandia",
        code: "TL",
      },
    },
    campus: {
      main: {
        area: "100 acres",
        buildings: {
          academic: {
            name: "Academic Block A",
            floors: 5,
          },
          administrative: {
            name: "Admin Block",
            floors: 3,
            departments: {
              admissions: {
                head: "Mr. Thomas Edison",
                contact: {
                  phone: "123-456-7890",
                  email: "admissions@tvu.edu",
                },
              },
              finance: {
                head: "Ms. Marie Curie",
                contact: {
                  phone: "123-456-7891",
                  email: "finance@tvu.edu",
                },
              },
            },
          },
        },
      },
    },
  },
  departments: {
    engineering: {
      head: "Dr. Ada Lovelace",
      programs: {
        undergraduate: {
          details: {
            name: "B.Tech",
            duration: "4 years",
            accreditation: {
              body: "ABET",
              renewal: "2025",
            },
          },
        },
        postgraduate: {
          details: {
            name: "M.Tech",
            duration: "2 years",
            accreditation: {
              body: "ABET",
              renewal: "2024",
            },
          },
        },
      },
    },
    humanities: {
      head: "Dr. Maya Angelou",
      programs: {
        undergraduate: {
          details: {
            name: "BA",
            duration: "3 years",
            accreditation: {
              body: "UGC",
              renewal: "2026",
            },
          },
        },
        postgraduate: {
          details: {
            name: "MA",
            duration: "2 years",
            accreditation: {
              body: "UGC",
              renewal: "2025",
            },
          },
        },
      },
    },
  },
  facilities: {
    library: {
      name: "Tech Valley Library",
      resources: {
        books: 500000,
        digitalAccess: {
          computers: 200,
          databases: {
            journals: {
              access: "24/7",
              subscriptions: "100+",
            },
            ebooks: {
              access: "24/7",
              subscriptions: "50,000+",
            },
          },
        },
        hours: {
          weekdays: "8am - 10pm",
          weekends: "10am - 8pm",
        },
      },
    },
    sportsComplex: {
      name: "Futureland Sports Complex",
      details: {
        coach: {
          name: "Mr. Michael Jordan",
          experience: "10 years",
        },
        facilities: {
          gym: "Open",
          pool: {
            name: "Olympic Pool",
            depth: "2m",
            hours: {
              weekdays: "6am - 9pm",
              weekends: "8am - 8pm",
            },
          },
        },
      },
    },
  },
};
