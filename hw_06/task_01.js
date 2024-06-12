// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

function getEmployeeInfo(name) {
    if (!name || typeof name !== "string") {
        throw new Error("Please provide a valid name")
    } else {
        const employeesNames = ["Konstantin", "Abuzar", "Alexey", "Artemiy", "Galina"];
        const employeesSalaries = ["2000", "1500", "1500", "1750", "1850"];
        const employeesInfo = [];
        const index = employeesNames.indexOf(name)
        if (index >= 0) {
            employeesInfo.push(employeesNames[index], employeesSalaries[index]);
            return employeesInfo;
        }
        else return null;
    }
}
console.log(getEmployeeInfo("Galina"))