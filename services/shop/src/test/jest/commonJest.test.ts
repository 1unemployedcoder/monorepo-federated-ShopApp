import { totalPagesCalc } from '@/utils/totalPagesCalc'

describe('Калькулятор страниц', () => {
    test('Деление с остатком', () => {
        expect(totalPagesCalc(101, 10)).toEqual(11)
    })

    test('Деление без остатка', () => {
        expect(totalPagesCalc(100, 10)).toEqual(10)
    })

    test('Общее количество меньше лимита', () => {
        expect(totalPagesCalc(5, 10)).toEqual(1)
    })

    test('Общее количество равно лимиту', () => {
        expect(totalPagesCalc(10, 10)).toEqual(1)
    })

    test('Нулевое общее количество', () => {
        expect(totalPagesCalc(0, 10)).toEqual(0)
    })

    test('Отрицательное общее количество', () => {
        expect(totalPagesCalc(-10, 10)).toEqual(0)
    })

    test('Отрицательный лимит', () => {
        expect(totalPagesCalc(100, -10)).toEqual(0)
    })

    test('Лимит равен нулю', () => {
        expect(totalPagesCalc(100, 0)).toEqual(0)
    })

    test('Общее количество и лимит равны нулю', () => {
        expect(totalPagesCalc(0, 0)).toEqual(0)
    })
})
