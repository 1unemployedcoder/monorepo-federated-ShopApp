import { validateValue } from './validateValue'

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Значение меньше допустимого', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('Значение больше допустимого', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('Значение меньше допустимого (нулевое)', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Значение больше допустимого (максимальное)', () => {
        expect(validateValue(100)).toBe(true)
    })
})
