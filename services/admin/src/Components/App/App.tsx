import { useEffect, useState } from 'react'
import {check, login, registration} from '@/API/ProductService'
import { getAll } from '@/API/readAPI'
import {createProduct, createProductComment} from "@/API/createAPI";

export const App = () => {
    const [mock, setMock] = useState([{
        description: 'ошибка',
        id: 1
    }])
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [product, setProduct] = useState({ name: '', description: '', img: '', price: '', typeId: '' })
    const [comment, setComment] = useState({ description: '', rate: 0 })
    const signIn = async (e: any) => {
        e.preventDefault()
        const response = await registration(name, password)
        console.log(response)
    }
    const logIn = async (e: any) => {
        e.preventDefault()
        const response = await login(name, password)
        console.log(response)
    }
    const fetchData = async () => {
        const resp = await getAll()
        setMock(resp.rows)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const newProduct = async (e: any) => {
        e.preventDefault()
        const response = await createProduct(product)
        console.log(response)
    }
    const newComment = async (e: any) => {
        e.preventDefault()
        const response = await createProductComment(7, comment)
        console.log(response)
    }
    return (
        <div>
            Админ панель
            Регистрация
            <form>
                <input
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    placeholder='Введите имя'
                />
                <input
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    placeholder='Введите пароль'
                    type='password'
                />
                <button onClick={signIn}>Зарегистрироваться</button>
            </form>
            Вход
            <form>
                <input
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    placeholder='Введите имя'
                />
                <input
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    placeholder='Введите пароль'
                    type='password'
                />
                <button onClick={logIn}>Войти</button>
            </form>
            Создание продукта
            <form>
                <input
                    value={product.name}
                    onChange={e => {
                        setProduct({
                            ...product,
                            name: e.target.value
                        })
                    }}
                    placeholder='название'
                />
                <input
                    value={product.description}
                    onChange={e => {
                        setProduct({
                            ...product,
                            description: e.target.value
                        })
                    }}
                    placeholder='описание'
                />
                <input
                    value={product.img}
                    onChange={e => {
                        setProduct({
                            ...product,
                            img: e.target.value
                        })
                    }}
                    placeholder='картинка'
                />
                <input
                    value={product.price}
                    onChange={e => {
                        setProduct({
                            ...product,
                            price: e.target.value
                        })
                    }}
                    placeholder='цена'
                />
                <input
                    value={product.typeId}
                    onChange={e => {
                        setProduct({
                            ...product,
                            typeId: e.target.value
                        })
                    }}
                    placeholder='тип'
                />
                <button onClick={newProduct}>Создать продукт</button>
            </form>
            Создание комментария
            <form>
                <input
                    value={comment.rate}
                    onChange={e => {
                        setComment({
                            ...comment,
                            rate: Number(e.target.value)
                        })
                    }}
                    placeholder='рейтинг'
                />
                <input
                    value={comment.description}
                    onChange={e => {
                        setComment({
                            ...comment,
                            description: e.target.value
                        })
                    }}
                    placeholder='описание'
                />
                <button onClick={newComment}>Создать комментарий</button>
            </form>
            Описание товаров
            {mock.map(el =>
                <div key={el.id}>
                    {el.description}
                </div>
            )}
        </div>
    )
}
