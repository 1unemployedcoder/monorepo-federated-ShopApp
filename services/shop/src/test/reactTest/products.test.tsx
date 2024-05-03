import { screen } from '@testing-library/react'
import { WrapperReact } from '@/test/helpers/wrapperReact'
import '@testing-library/jest-dom'
import Products from '@/pages/Products'
import type { getAllTest } from '@/test/@types/jestTypes'
import axios from 'axios'
const axiosMock = jest.spyOn(axios, 'get')
describe('Products tests', () => {
    let response: getAllTest

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
                    createdAt: '2024-04-13T17:11:16.137Z',
                    updatedAt: '2024-04-13T17:11:16.137Z',
                    typeId: 1
                },
                {
                    name: 'iPhone',
                    description: "Apple's flagship smartphone with cutting-edge features.",
                    img: 'https://spb-apple.ru/image/cache/catalog/Add/iPhone%2014%20Pro%20Max/14promaxg-700x700.jpg',
                    price: 1000,
                    id: 2,
                    createdAt: '2024-04-13T17:20:48.529Z',
                    updatedAt: '2024-04-13T17:20:48.529Z',
                    typeId: 1
                },
                {
                    name: 'Motherboard',
                    description: 'Main circuit board providing connectivity and expansion capabilities.',
                    img: 'https://www.pngall.com/wp-content/uploads/2016/04/Motherboard-Download-PNG.png',
                    price: 250,
                    id: 5,
                    createdAt: '2024-04-13T19:56:13.090Z',
                    updatedAt: '2024-04-13T19:56:13.090Z',
                    typeId: 4
                },
                {
                    name: 'Samsung',
                    description: 'Android smartphone',
                    img: 'https://e7.pngegg.com/pngimages/183/274/png-clipart-lg-electronics-smartphone-android-lte-30-minutes-gadget-magenta.png',
                    price: 1000,
                    id: 7,
                    createdAt: '2024-04-19T10:18:13.062Z',
                    updatedAt: '2024-04-19T10:18:13.062Z',
                    typeId: 1
                },
                {
                    name: '1',
                    description: '1',
                    img: '1',
                    price: 1,
                    id: 13,
                    createdAt: '2024-04-23T10:18:27.889Z',
                    updatedAt: '2024-04-23T10:18:27.889Z',
                    typeId: 1
                }
            ]
        }
    })
    test('Fetching products', async () => {
        axiosMock.mockResolvedValue({ data: response })
        WrapperReact(<Products/>)
        const products = await screen.findAllByTestId('product')
        expect(products).toHaveLength(5)
        expect(axiosMock).toHaveBeenCalledTimes(1)
    })
})
