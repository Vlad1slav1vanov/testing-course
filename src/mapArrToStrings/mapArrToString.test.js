const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Корректное значение', () => {
    expect(mapArrToStrings([1, 2, 3, 4])).toEqual(['1', '2', '3', '4']);
  })

  test('Разные типы данных', () => {
    expect(mapArrToStrings([1, 2, 3, 4, null, undefined, '1234'])).toEqual(['1', '2', '3', '4']);
  })

  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  })

  test('Отрицание', () => {
    expect(mapArrToStrings([1, 2, 3, 4])).not.toEqual(['1', '2', '3', '4', '5']);
  })
})