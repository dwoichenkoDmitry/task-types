/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
interface IPerson {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
export function getPersons(): Array<IPerson>;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
interface IPersonUser {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
interface IPersonEmployee {
    name: string;
    age: number;
    gender: 'male' | 'female';
    company: string;
}
export function personToString(person: IPersonUser | IPersonEmployee): string;
