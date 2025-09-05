export function idGenerate() {
    return Math.random().toString(16).slice(2);
  }
const namesRus = ['Иван', 'Мария', 'Петр', 'Анна', 'Дмитрий', 'Елена', 'Сергей', 'Ольга', 'Алексей', 'Татьяна'];
const namesEn = ['John', 'Mary', 'Peter', 'Ann', 'Dmitry', 'Helen', 'Sergey', 'Olga', 'Alex', 'Tatyana'];
const lastNamesRus = ["Иванов", "Смирнов", "Кузнецов", "Попов", "Васильев", "Петров", "Соколов", "Михайлов", "Новиков", "Федоров"]
const lastNamesEn = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"]

export function userName() {
  const useRussian = Math.random() < 0.5; 
  if (useRussian) {
    const name = namesRus[Math.floor(Math.random() * namesRus.length)];
    const lastName = lastNamesRus[Math.floor(Math.random() * lastNamesRus.length)]
    return name + " " + lastName;
  } else {
    const name = namesEn[Math.floor(Math.random() * namesEn.length)];
    const lastName = lastNamesEn[Math.floor(Math.random() * lastNamesEn.length)]
    return name + " " + lastName;
  }
}

export function userBalance() {
    return Math.floor(Math.random() * 100000); 
}