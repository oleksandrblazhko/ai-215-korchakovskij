// Приклад компоненту для отримання даних про температуру

const TempretureCheck = () => {
  const [error, setError] = useState("");
  const [result, setResult] = useState({});

  // Метод для перевірки та додавання даних до бази даних

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { region, date } = e.target;

    const currentDate = new Date();
    const enteredDate = new Date(date.value);

    const city = cities.find(({ name }) => name === region.value);

    // Відповідно до помилки у введені даних, виводимо потрібне нам повідомлення

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

    // Збереження даних у стейті для їх вивдення для користувача

    setResult({
      actual_tempreture: temp_c,
      feeling_tempreture: feelslike_c,
      humidity,
      wind_speed: wind_kph,
    });

    // Метод для додавання документа в базу даних

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

  return (
    <>
      {Object.values(result).length === 0 ? (
        <form className={css.box} onSubmit={handleSubmit}>
          <label className={css.label}>
            Region
            <input
              className={css.input}
              type="text"
              name="region"
              placeholder="Enter the region 'Paris' or 'London'"
            />
          </label>

          <label className={css.label}>
            Date
            <input
              className={css.input}
              type="text"
              name="date"
              placeholder="Enter the date yyyy-mm-dd"
            />
          </label>

          <button className={css.submit__button} type="submit">
            Check the tempreture
          </button>

          {error && <p className={css.error}>{error}</p>}
        </form>
      ) : (
        <div className={css.box}>
          <p className={css.label}>
            Actual tempreture: {result.actual_tempreture}°C
          </p>

          <p className={css.label}>
            Feeling tempreture: {result.feeling_tempreture}°C
          </p>

          <p className={css.label}>Humidity: {result.humidity}%</p>

          <p className={css.label}>Wind wind_speed: {result.wind_speed}km/h</p>

          <button className={css.submit__button} type="button">
            Return to the main menu
          </button>
        </div>
      )}
    </>
  );
};

