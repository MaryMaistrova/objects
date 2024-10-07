// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 


let car = {

  manufacturer: 'Suzuki Motor Corporation',
  model: 'Suzuki Ignis Hybrid',
  year: 2021,
  velocity: 70,
  fuelTankVolume: 32,
  fuelСonsumption: 5,
  driver: 'Mary',
  drivers: [],

  getInfo() {
    console.log(`The car name is ${car.model}. It is made by ${car.manufacturer} in ${car.year}. The fuel consumption is ${car.fuelСonsumption}`)
  },

  addDriver(name) {
    car.drivers.push(name)
  },

  hasDriver(name) {
    return car.drivers.includes(name)
  },

  estimateTravel(distance) {
    let time = +(distance / car.velocity).toFixed(2)
    time += Math.floor(time / 4)
    const fuel = distance / 100 * car.fuelСonsumption
    return { time, fuel }
  }
}

car.addDriver('Ann')



// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let time = {
  hours: 12,
  minutes: 34,
  seconds: 45,

  show() { console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`) },

  changeHours(addedHours) {
    let updatedHours = time.hours + addedHours
    if (updatedHours > 24) {
      time.hours = updatedHours - 24
    } else { time.hours = updatedHours }
  },

  changeMinutes(addedMinutes) {
    let updatedMinutes = time.minutes + addedMinutes

    if (updatedMinutes > 60) {
      time.hours += Math.floor(addedMinutes / 60)

      while (addedMinutes > 60) {
        addedMinutes = addedMinutes - 60
        return addedMinutes
      }

      time.minutes += addedMinutes

    } else { time.minutes += addedMinutes }
  },

  changeSeconds(addedSeconds) {
    let updatedSeconds = time.seconds + addedSeconds

    if (updatedSeconds > 60) {
      time.minutes += Math.floor(addedSeconds / 60)

      while (addedSeconds > 60) {
        addedSeconds = addedSeconds - 60
        return addedSeconds
      }

      time.seconds += addedSeconds

    } else { time.seconds += addedSeconds }
  },
}

time.changeHours(1)
time.changeMinutes(1)
time.changeSeconds(1)
console.log(time.hours, time.minutes, time.seconds)
