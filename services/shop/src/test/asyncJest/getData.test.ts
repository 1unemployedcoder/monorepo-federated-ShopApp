import axios from 'axios'
import { getAll } from '@/API/ProductService'
import { type getAllTest } from '@/test/@types/jestTypes'
describe('Async test', () => {
    let response: getAllTest

    beforeEach(() => {
        response = {
            count: 4,
            rows: [
                {
                    createdAt: '2024-04-13T17:11:16.137Z',
                    description: 'Powerful laptop for professionals and creatives.',
                    id: 1,
                    img: 'https://pngicon.ru/file/uploads/2_14-128x128.png',
                    name: 'MacBook',
                    price: 2000,
                    typeId: 1,
                    updatedAt: '2024-04-13T17:11:16.137Z'
                },
                {
                    createdAt: '2024-04-13T17:20:48.529Z',
                    description: "Apple's flagship smartphone with cutting-edge features.",
                    id: 2,
                    img: 'https://spb-apple.ru/image/cache/catalog/Add/iPhone%2014%20Pro%20Max/14promaxg-700x700.jpg',
                    name: 'iPhone',
                    price: 1000,
                    typeId: 1,
                    updatedAt: '2024-04-13T17:20:48.529Z'
                },
                {
                    createdAt: '2024-04-19T10:18:13.062Z',
                    description: 'Android smartphone',
                    id: 7,
                    img: 'https://e7.pngegg.com/pngimages/183/274/png-clipart-lg-electronics-smartphone-android-lte-30-minutes-gadget-magenta.png',
                    name: 'Samsung',
                    price: 1000,
                    typeId: 1,
                    updatedAt: '2024-04-19T10:18:13.062Z'
                },
                {
                    createdAt: '2024-04-23T10:18:27.889Z',
                    description: '1',
                    id: 13,
                    img: '1',
                    name: '1',
                    price: 1,
                    typeId: 1,
                    updatedAt: '2024-04-23T10:18:27.889Z'
                }
            ]
        }
    })

    test('getAll returns expected response', async () => {
        const axiosMock = jest.spyOn(axios, 'get')

        axiosMock.mockResolvedValue({ data: response })

        const result = await getAll({ search: '', sort: '', page: 1, limit: 5, typeId: '1' })

        expect(axiosMock).toHaveBeenCalledTimes(1)

        expect(result).toEqual(response)
    })
})
