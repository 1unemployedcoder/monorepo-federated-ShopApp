import axios from 'axios'
import { type fetchedProducts } from '@/@types/reduxTypes'
import { getAll } from '@/API/ProductService'
jest.mock('axios')

describe('Async test', () => {
    let response: fetchedProducts

    beforeEach(() => {
        response = {
            count: 4,
            rows: [
                {
                    name: 'MacBook',
                    description: 'Powerful laptop for professionals and creatives.',
                    img: 'https://pngicon.ru/file/uploads/2_14-128x128.png',
                    price: 2000,
                    id: 1,
                    typeId: 1
                },
                {
                    name: 'iPhone',
                    description: "Apple's flagship smartphone with cutting-edge features.",
                    img: 'https://spb-apple.ru/image/cache/catalog/Add/iPhone%2014%20Pro%20Max/14promaxg-700x700.jpg',
                    price: 1000,
                    id: 2,
                    typeId: 1
                },
                {
                    name: 'Samsung',
                    description: 'Android smartphone',
                    img: 'https://e7.pngegg.com/pngimages/183/274/png-clipart-lg-electronics-smartphone-android-lte-30-minutes-gadget-magenta.png',
                    price: 1000,
                    id: 7,
                    typeId: 1
                },
                {
                    name: '1',
                    description: '1',
                    img: '1',
                    price: 1,
                    id: 13,
                    typeId: 1
                }
            ]
        }
    })

    test('getAll returns expected response', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: response })

        const result = await getAll({ search: '', sort: '', page: 1, limit: 5, typeId: '1' })

        expect(result).toEqual(response)
    })
})
