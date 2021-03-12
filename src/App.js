import "./App.css";
import Forcasting from "./Components/tabs";

const list = [
  {
    dt: 1615593600,
    main: {
      temp: 274.81,
      feels_like: 265.83,
      temp_min: 272.66,
      temp_max: 274.81,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 1006,
      humidity: 46,
      temp_kf: 2.15,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n",
      },
    ],
    clouds: {
      all: 22,
    },
    wind: {
      speed: 8.6,
      deg: 308,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-13 00:00:00",
  },
  {
    dt: 1615604400,
    main: {
      temp: 271.99,
      feels_like: 264.18,
      temp_min: 270.65,
      temp_max: 271.99,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 1009,
      humidity: 47,
      temp_kf: 1.34,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 6,
    },
    wind: {
      speed: 6.68,
      deg: 316,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-13 03:00:00",
  },
  {
    dt: 1615615200,
    main: {
      temp: 270.38,
      feels_like: 263.96,
      temp_min: 269.94,
      temp_max: 270.38,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1010,
      humidity: 49,
      temp_kf: 0.44,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 8,
    },
    wind: {
      speed: 4.61,
      deg: 319,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-13 06:00:00",
  },
  {
    dt: 1615626000,
    main: {
      temp: 269.41,
      feels_like: 263.68,
      temp_min: 269.35,
      temp_max: 269.41,
      pressure: 1031,
      sea_level: 1031,
      grnd_level: 1010,
      humidity: 51,
      temp_kf: 0.06,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    clouds: {
      all: 44,
    },
    wind: {
      speed: 3.58,
      deg: 310,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-13 09:00:00",
  },
  {
    dt: 1615636800,
    main: {
      temp: 269.07,
      feels_like: 263.64,
      temp_min: 269.07,
      temp_max: 269.07,
      pressure: 1032,
      sea_level: 1032,
      grnd_level: 1011,
      humidity: 49,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    clouds: {
      all: 22,
    },
    wind: {
      speed: 3.09,
      deg: 291,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-13 12:00:00",
  },
  {
    dt: 1615647600,
    main: {
      temp: 271.03,
      feels_like: 265.32,
      temp_min: 271.03,
      temp_max: 271.03,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1009,
      humidity: 46,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    clouds: {
      all: 31,
    },
    wind: {
      speed: 3.58,
      deg: 276,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-13 15:00:00",
  },
  {
    dt: 1615658400,
    main: {
      temp: 275.05,
      feels_like: 268.96,
      temp_min: 275.05,
      temp_max: 275.05,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1008,
      humidity: 40,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    clouds: {
      all: 18,
    },
    wind: {
      speed: 4.3,
      deg: 261,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-13 18:00:00",
  },
  {
    dt: 1615669200,
    main: {
      temp: 277.21,
      feels_like: 270.4,
      temp_min: 277.21,
      temp_max: 277.21,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 1003,
      humidity: 34,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 5.32,
      deg: 252,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-13 21:00:00",
  },
  {
    dt: 1615680000,
    main: {
      temp: 275.98,
      feels_like: 270.19,
      temp_min: 275.98,
      temp_max: 275.98,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 1002,
      humidity: 47,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 4.22,
      deg: 243,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-14 00:00:00",
  },
  {
    dt: 1615690800,
    main: {
      temp: 276.25,
      feels_like: 269.99,
      temp_min: 276.25,
      temp_max: 276.25,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 1000,
      humidity: 60,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 5.38,
      deg: 261,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-14 03:00:00",
  },
  {
    dt: 1615701600,
    main: {
      temp: 275.86,
      feels_like: 270.87,
      temp_min: 275.86,
      temp_max: 275.86,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 999,
      humidity: 71,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n",
      },
    ],
    clouds: {
      all: 18,
    },
    wind: {
      speed: 3.9,
      deg: 294,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-14 06:00:00",
  },
  {
    dt: 1615712400,
    main: {
      temp: 273.91,
      feels_like: 269.05,
      temp_min: 273.91,
      temp_max: 273.91,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 1000,
      humidity: 77,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n",
      },
    ],
    clouds: {
      all: 19,
    },
    wind: {
      speed: 3.57,
      deg: 316,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-14 09:00:00",
  },
  {
    dt: 1615723200,
    main: {
      temp: 273.21,
      feels_like: 268.64,
      temp_min: 273.21,
      temp_max: 273.21,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 1002,
      humidity: 77,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 10,
    },
    wind: {
      speed: 3.04,
      deg: 290,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-14 12:00:00",
  },
  {
    dt: 1615734000,
    main: {
      temp: 275.67,
      feels_like: 268.16,
      temp_min: 275.67,
      temp_max: 275.67,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 1003,
      humidity: 49,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 70,
    },
    wind: {
      speed: 6.7,
      deg: 322,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-14 15:00:00",
  },
  {
    dt: 1615744800,
    main: {
      temp: 274.28,
      feels_like: 264.9,
      temp_min: 274.28,
      temp_max: 274.28,
      pressure: 1026,
      sea_level: 1026,
      grnd_level: 1006,
      humidity: 34,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 51,
    },
    wind: {
      speed: 8.75,
      deg: 327,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-14 18:00:00",
  },
  {
    dt: 1615755600,
    main: {
      temp: 272.49,
      feels_like: 263.09,
      temp_min: 272.49,
      temp_max: 272.49,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 1007,
      humidity: 30,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 8.54,
      deg: 333,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-14 21:00:00",
  },
  {
    dt: 1615766400,
    main: {
      temp: 270.31,
      feels_like: 262.25,
      temp_min: 270.31,
      temp_max: 270.31,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1009,
      humidity: 34,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 6.6,
      deg: 338,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-15 00:00:00",
  },
  {
    dt: 1615777200,
    main: {
      temp: 268.9,
      feels_like: 261.44,
      temp_min: 268.9,
      temp_max: 268.9,
      pressure: 1033,
      sea_level: 1033,
      grnd_level: 1012,
      humidity: 34,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 5.66,
      deg: 350,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-15 03:00:00",
  },
  {
    dt: 1615788000,
    main: {
      temp: 267.39,
      feels_like: 260.41,
      temp_min: 267.39,
      temp_max: 267.39,
      pressure: 1034,
      sea_level: 1034,
      grnd_level: 1013,
      humidity: 35,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 4.91,
      deg: 0,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-15 06:00:00",
  },
  {
    dt: 1615798800,
    main: {
      temp: 266.15,
      feels_like: 260.21,
      temp_min: 266.15,
      temp_max: 266.15,
      pressure: 1034,
      sea_level: 1034,
      grnd_level: 1013,
      humidity: 35,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 3.37,
      deg: 355,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-15 09:00:00",
  },
  {
    dt: 1615809600,
    main: {
      temp: 265.4,
      feels_like: 259.62,
      temp_min: 265.4,
      temp_max: 265.4,
      pressure: 1035,
      sea_level: 1035,
      grnd_level: 1013,
      humidity: 37,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 3.14,
      deg: 9,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-15 12:00:00",
  },
  {
    dt: 1615820400,
    main: {
      temp: 267.51,
      feels_like: 261.96,
      temp_min: 267.51,
      temp_max: 267.51,
      pressure: 1034,
      sea_level: 1034,
      grnd_level: 1013,
      humidity: 27,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 2.73,
      deg: 50,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-15 15:00:00",
  },
  {
    dt: 1615831200,
    main: {
      temp: 270.14,
      feels_like: 264.02,
      temp_min: 270.14,
      temp_max: 270.14,
      pressure: 1031,
      sea_level: 1031,
      grnd_level: 1010,
      humidity: 24,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 5,
    },
    wind: {
      speed: 3.58,
      deg: 101,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-15 18:00:00",
  },
  {
    dt: 1615842000,
    main: {
      temp: 270.02,
      feels_like: 264.48,
      temp_min: 270.02,
      temp_max: 270.02,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 1007,
      humidity: 33,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: {
      all: 2,
    },
    wind: {
      speed: 2.96,
      deg: 149,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-15 21:00:00",
  },
  {
    dt: 1615852800,
    main: {
      temp: 270.05,
      feels_like: 263.92,
      temp_min: 270.05,
      temp_max: 270.05,
      pressure: 1026,
      sea_level: 1026,
      grnd_level: 1005,
      humidity: 38,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    clouds: {
      all: 26,
    },
    wind: {
      speed: 3.92,
      deg: 88,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-16 00:00:00",
  },
  {
    dt: 1615863600,
    main: {
      temp: 271.15,
      feels_like: 264.6,
      temp_min: 271.15,
      temp_max: 271.15,
      pressure: 1025,
      sea_level: 1025,
      grnd_level: 1004,
      humidity: 39,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: {
      all: 94,
    },
    wind: {
      speed: 4.61,
      deg: 92,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-16 03:00:00",
  },
  {
    dt: 1615874400,
    main: {
      temp: 271.6,
      feels_like: 264.54,
      temp_min: 271.6,
      temp_max: 271.6,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 1000,
      humidity: 48,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 5.6,
      deg: 97,
    },
    visibility: 6690,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-16 06:00:00",
  },
  {
    dt: 1615885200,
    main: {
      temp: 271.96,
      feels_like: 264.87,
      temp_min: 271.96,
      temp_max: 271.96,
      pressure: 1019,
      sea_level: 1019,
      grnd_level: 998,
      humidity: 50,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: "Snow",
        description: "light snow",
        icon: "13n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.73,
      deg: 97,
    },
    visibility: 9264,
    pop: 0.59,
    snow: {
      "3h": 0.24,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-16 09:00:00",
  },
  {
    dt: 1615896000,
    main: {
      temp: 272.31,
      feels_like: 265.81,
      temp_min: 272.31,
      temp_max: 272.31,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 995,
      humidity: 57,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: "Snow",
        description: "light snow",
        icon: "13d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.12,
      deg: 107,
    },
    visibility: 10000,
    pop: 0.79,
    snow: {
      "3h": 0.79,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-16 12:00:00",
  },
  {
    dt: 1615906800,
    main: {
      temp: 273.58,
      feels_like: 267.15,
      temp_min: 273.58,
      temp_max: 273.58,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 993,
      humidity: 56,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.14,
      deg: 89,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-16 15:00:00",
  },
  {
    dt: 1615917600,
    main: {
      temp: 274.47,
      feels_like: 268.41,
      temp_min: 274.47,
      temp_max: 274.47,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 991,
      humidity: 66,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.03,
      deg: 77,
    },
    visibility: 10000,
    pop: 0.01,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-16 18:00:00",
  },
  {
    dt: 1615928400,
    main: {
      temp: 273.36,
      feels_like: 268.16,
      temp_min: 273.36,
      temp_max: 273.36,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 989,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.32,
      deg: 75,
    },
    visibility: 6979,
    pop: 0.98,
    rain: {
      "3h": 0.39,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-16 21:00:00",
  },
  {
    dt: 1615939200,
    main: {
      temp: 273.34,
      feels_like: 269.08,
      temp_min: 273.34,
      temp_max: 273.34,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 989,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.09,
      deg: 55,
    },
    visibility: 10000,
    pop: 0.99,
    rain: {
      "3h": 0.44,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-17 00:00:00",
  },
  {
    dt: 1615950000,
    main: {
      temp: 273.45,
      feels_like: 269.76,
      temp_min: 273.45,
      temp_max: 273.45,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 990,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.23,
      deg: 338,
    },
    visibility: 10000,
    pop: 0.27,
    rain: {
      "3h": 0.15,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-17 03:00:00",
  },
  {
    dt: 1615960800,
    main: {
      temp: 273.62,
      feels_like: 270.33,
      temp_min: 273.62,
      temp_max: 273.62,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 990,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.7,
      deg: 323,
    },
    visibility: 10000,
    pop: 0.2,
    rain: {
      "3h": 0.1,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-17 06:00:00",
  },
  {
    dt: 1615971600,
    main: {
      temp: 273.84,
      feels_like: 270.63,
      temp_min: 273.84,
      temp_max: 273.84,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 992,
      humidity: 90,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.59,
      deg: 279,
    },
    visibility: 10000,
    pop: 0.16,
    sys: {
      pod: "n",
    },
    dt_txt: "2021-03-17 09:00:00",
  },
  {
    dt: 1615982400,
    main: {
      temp: 273.73,
      feels_like: 270.46,
      temp_min: 273.73,
      temp_max: 273.73,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 993,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 1.72,
      deg: 281,
    },
    visibility: 10000,
    pop: 0.01,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-17 12:00:00",
  },
  {
    dt: 1615993200,
    main: {
      temp: 276.34,
      feels_like: 272.88,
      temp_min: 276.34,
      temp_max: 276.34,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 994,
      humidity: 78,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 76,
    },
    wind: {
      speed: 2.05,
      deg: 289,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-17 15:00:00",
  },
  {
    dt: 1616004000,
    main: {
      temp: 277.63,
      feels_like: 274.28,
      temp_min: 277.63,
      temp_max: 277.63,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 995,
      humidity: 73,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 84,
    },
    wind: {
      speed: 1.97,
      deg: 270,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-17 18:00:00",
  },
  {
    dt: 1616014800,
    main: {
      temp: 278.38,
      feels_like: 275.89,
      temp_min: 278.38,
      temp_max: 278.38,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 994,
      humidity: 71,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.81,
      deg: 204,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "d",
    },
    dt_txt: "2021-03-17 21:00:00",
  },
];

function App() {
  return (
    <div className="App">
      <header className="">
        <Forcasting list={list}></Forcasting>
      </header>
    </div>
  );
}

export default App;
