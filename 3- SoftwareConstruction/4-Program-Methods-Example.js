// Приклад встановлення з'єднання з базою даних Firebase Firestore Database

const firebaseConfig = {
  apiKey: "AIzaSyBgBmkRwC4bHkM55dCAWsBB3_z7eLY3iGQ",
  authDomain: "annoyanceproject-d1ce5.firebaseapp.com",
  projectId: "annoyanceproject-d1ce5",
  storageBucket: "annoyanceproject-d1ce5.appspot.com",
  messagingSenderId: "181540434471",
  appId: "1:181540434471:web:b8d612ed7f502582811402",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const weatherRef = collection(db, "weather");

// Приклад методу для перевірки та додавання даних до бази даних

const checkTempretureLevel = async (e) => {
  e.preventDefault();

  const { region, date } = e.target;

  const currentDate = new Date();
  const enteredDate = new Date(date.value);

  const city = cities.find(({ name }) => name === region.value);

  if (currentDate.getTime() > enteredDate.getTime()) {
    return errorSetter(-2);
  } else if (!city) {
    return errorSetter(-1);
  } else {
    errorSetter(1);
  }

  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json`,
    {
      params: {
        key: "a7c989d3c3494837b63123814230911",
        q: region.value,
        dt: date.value,
        aqi: "no",
      },
    }
  );

  const { temp_c, feelslike_c, humidity, wind_kph } = data.current;

  setResult({
    actual_tempreture: temp_c,
    feeling_tempreture: feelslike_c,
    humidity,
    wind_speed: wind_kph,
  });

  addDoc(weatherRef, {
    check_time: new Date(),
    actual_tempreture: temp_c,
    feeling_tempreture: feelslike_c,
    humidity: humidity,
    wind_speed: wind_kph,
  });
};

// Метод для виведення відповідних помилок для користувача

const errorSetter = (number) => {
  if (number === 1) {
    setError("");
  } else if (number === -1) {
    setError("Entered region does not exist");
  } else if (number === -2) {
    setError("Entered date should be greater than the current date");
  }
};
