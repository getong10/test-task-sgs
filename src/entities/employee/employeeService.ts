import type { IEmployee } from "./employeeModel";

export const employees: Array<IEmployee> = [
  { id: 1, first_name: "Иван", last_name: "Иванов", departament_id: 1 },
  { id: 2, first_name: "Петр", last_name: "Петров", departament_id: 1 },
  { id: 3, first_name: "Сергей", last_name: "Сидоров", departament_id: 1 },
  { id: 4, first_name: "Алексей", last_name: "Смирнов", departament_id: 1 },

  { id: 5, first_name: "Дмитрий", last_name: "Кузнецов", departament_id: 2 },
  { id: 6, first_name: "Андрей", last_name: "Васильев", departament_id: 2 },
  { id: 7, first_name: "Николай", last_name: "Морозов", departament_id: 2 },
  { id: 8, first_name: "Владимир", last_name: "Новиков", departament_id: 2 },

  { id: 9, first_name: "Григорий", last_name: "Федоров", departament_id: 3 },
  { id: 10, first_name: "Олег", last_name: "Михайлов", departament_id: 3 },
  { id: 11, first_name: "Семен", last_name: "Орлов", departament_id: 3 },
  { id: 12, first_name: "Антон", last_name: "Павлов", departament_id: 3 },

  { id: 13, first_name: "Юрий", last_name: "Семенов", departament_id: 4 },
  { id: 14, first_name: "Виктор", last_name: "Егоров", departament_id: 4 },
  { id: 15, first_name: "Роман", last_name: "Алексеев", departament_id: 4 },
  { id: 16, first_name: "Евгений", last_name: "Гаврилов", departament_id: 4 },

  { id: 17, first_name: "Максим", last_name: "Кириллов", departament_id: 5 },
  { id: 18, first_name: "Игорь", last_name: "Беляев", departament_id: 5 },
  { id: 19, first_name: "Владислав", last_name: "Титов", departament_id: 5 },
  { id: 20, first_name: "Константин", last_name: "Макаров", departament_id: 5 },

  { id: 21, first_name: "Тимофей", last_name: "Захаров", departament_id: 6 },
  { id: 22, first_name: "Даниил", last_name: "Матвеев", departament_id: 6 },
  { id: 23, first_name: "Артем", last_name: "Сорокин", departament_id: 6 },
  { id: 24, first_name: "Вячеслав", last_name: "Гордеев", departament_id: 6 },

  { id: 25, first_name: "Станислав", last_name: "Фролов", departament_id: 7 },
  { id: 26, first_name: "Юрий", last_name: "Дмитриев", departament_id: 7 },
  { id: 27, first_name: "Виталий", last_name: "Андреев", departament_id: 7 },
  { id: 28, first_name: "Олег", last_name: "Мельников", departament_id: 7 },

  { id: 29, first_name: "Анатолий", last_name: "Никифоров", departament_id: 8 },
  { id: 30, first_name: "Борис", last_name: "Григорьев", departament_id: 8 },
  { id: 31, first_name: "Егор", last_name: "Сергеев", departament_id: 8 },
  { id: 32, first_name: "Федор", last_name: "Романов", departament_id: 8 },

  { id: 33, first_name: "Александр", last_name: "Лаврентьев", departament_id: 9 },
  { id: 34, first_name: "Василий", last_name: "Богданов", departament_id: 9 },
  { id: 35, first_name: "Павел", last_name: "Степанов", departament_id: 9 },
  { id: 36, first_name: "Глеб", last_name: "Константинов", departament_id: 9 },

  { id: 37, first_name: "Денис", last_name: "Фомин", departament_id: 10 },
  { id: 38, first_name: "Илья", last_name: "Капустин", departament_id: 10 },
  { id: 39, first_name: "Аркадий", last_name: "Тарасов", departament_id: 10 },
  { id: 40, first_name: "Ростислав", last_name: "Чернов", departament_id: 10 },

  { id: 41, first_name: "Леонид", last_name: "Абрамов", departament_id: 11 },
  { id: 42, first_name: "Геннадий", last_name: "Мартынов", departament_id: 11 },
  { id: 43, first_name: "Валерий", last_name: "Тихонов", departament_id: 11 },
  { id: 44, first_name: "Роман", last_name: "Миронов", departament_id: 11 },

  { id: 45, first_name: "Никита", last_name: "Федосеев", departament_id: 12 },
  { id: 46, first_name: "Эдуард", last_name: "Сазонов", departament_id: 12 },
  { id: 47, first_name: "Кирилл", last_name: "Буров", departament_id: 12 },
  { id: 48, first_name: "Марат", last_name: "Зверев", departament_id: 12 },

  { id: 49, first_name: "Всеволод", last_name: "Куликов", departament_id: 13 },
  { id: 50, first_name: "Артемий", last_name: "Колесников", departament_id: 13 },
  { id: 51, first_name: "Гордей", last_name: "Астахов", departament_id: 13 },
  { id: 52, first_name: "Родион", last_name: "Шестаков", departament_id: 13 },

  { id: 53, first_name: "Владлен", last_name: "Зимин", departament_id: 14 },
  { id: 54, first_name: "Сергей", last_name: "Сафонов", departament_id: 14 },
  { id: 55, first_name: "Георгий", last_name: "Козлов", departament_id: 14 },
  { id: 56, first_name: "Алексей", last_name: "Ермаков", departament_id: 14 },

  { id: 57, first_name: "Мирон", last_name: "Данилов", departament_id: 15 },
  { id: 58, first_name: "Ярослав", last_name: "Сысоев", departament_id: 15 },
  { id: 59, first_name: "Савва", last_name: "Горшков", departament_id: 15 },
  { id: 60, first_name: "Прохор", last_name: "Малинин", departament_id: 15 },

  { id: 61, first_name: "Матвей", last_name: "Соболев", departament_id: 16 },
  { id: 62, first_name: "Тихон", last_name: "Логинов", departament_id: 16 },
  { id: 63, first_name: "Лука", last_name: "Меркушев", departament_id: 16 },
  { id: 64, first_name: "Александр", last_name: "Киселев", departament_id: 16 },

  { id: 65, first_name: "Вениамин", last_name: "Чистяков", departament_id: 17 },
  { id: 66, first_name: "Макар", last_name: "Шилов", departament_id: 17 },
  { id: 67, first_name: "Игнат", last_name: "Евдокимов", departament_id: 17 },
  { id: 68, first_name: "Платон", last_name: "Филатов", departament_id: 17 },

  { id: 69, first_name: "Богдан", last_name: "Мухин", departament_id: 18 },
  { id: 70, first_name: "Севастьян", last_name: "Крюков", departament_id: 18 },
  { id: 71, first_name: "Филипп", last_name: "Рожков", departament_id: 18 },
  { id: 72, first_name: "Мирослав", last_name: "Дементьев", departament_id: 18 },

  { id: 73, first_name: "Арсений", last_name: "Родин", departament_id: 19 },
  { id: 74, first_name: "Владислав", last_name: "Головин", departament_id: 19 },
  { id: 75, first_name: "Дамир", last_name: "Воронов", departament_id: 19 },
  { id: 76, first_name: "Святослав", last_name: "Мельников", departament_id: 19 },

  { id: 77, first_name: "Даниэль", last_name: "Антонов", departament_id: 20 },
  { id: 78, first_name: "Рустам", last_name: "Грачев", departament_id: 20 },
  { id: 79, first_name: "Эмиль", last_name: "Корнилов", departament_id: 20 },
  { id: 80, first_name: "Тимур", last_name: "Панин", departament_id: 20 },
]