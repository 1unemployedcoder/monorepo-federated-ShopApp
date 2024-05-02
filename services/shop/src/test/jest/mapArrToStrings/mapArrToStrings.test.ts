import { mapArrToStrings } from './mapArrToStrings'

test('Корректное значение', () => {
    expect(mapArrToStrings([1, 2, 3])).toStrictEqual(['1', '2', '3'])
})
