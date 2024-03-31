import {gadgets} from "./DataBase/Products";
import {comments} from "./DataBase/Comments";
import {news} from "./DataBase/News";

export default class AjaxAPI {
    static getPopular = () => {
        const popular = gadgets.sort((a, b) => (b.commentIds.length - a.commentIds.length)).slice(0, 5)

        return new Promise((res) => {
            setTimeout(() => {
                res(popular);
            }, Math.random() * 1000)
        })
    }

    static getGadget = (id) => {
        const product = gadgets.find(g => g.id === id)
        const productComments = comments.filter(comment => product.commentIds.includes(comment.id))
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    product: product,
                    comments: productComments
                })
            }, Math.random() * 1000)
        })
    }

    static getCategories (){
        const uniqueCategories = (products) => {
            const uniqueCategoriesSet = new Set()
            const uniqueCategoriesArray = []

            products.forEach(product => {
                if (!uniqueCategoriesSet.has(product.category.value)) {
                    uniqueCategoriesSet.add(product.category.value)
                    uniqueCategoriesArray.push(product.category)
                }
            })

            return uniqueCategoriesArray
        }

        const categories = uniqueCategories(gadgets)

        return new Promise((res) => {
            setTimeout(() => {
                res(categories);
            }, Math.random() * 3000)
        })
    }

    static getGadgetsComments = (params) => {
        const startIndex = (params.page - 1) * params.limit
        const endIndex = startIndex + params.limit
        let tempGadgets = gadgets

        if (params.type !== 'all') {
            tempGadgets = tempGadgets.filter(g => g.category.value === params.type)
        }

        const filtered =
            tempGadgets
                .filter((v) => {
                    if (params.gadget === null) return true;
                    return v.gadget.toLowerCase().includes(params.gadget.toLowerCase());
                })
        const sorted =
            filtered
                .sort((a, b) => {
                    if (params.sort === "asc") {
                        return a.price - b.price
                    } else if (params.sort === "desc") {
                        return b.price - a.price
                    }
                    return 0
                })
                .slice(startIndex, endIndex)

        const filteredComments = comments.filter(comment => {
            return sorted.some(product => product.commentIds.includes(comment.id))
        })

        const products = sorted.map(gadget => {
            const comments = []

            gadget.commentIds.forEach(commentId => {
                const comment = filteredComments.find(comment => comment.id === commentId)
                if (comment) {
                    comments.push(comment)
                }
            })
            return {
                ...gadget,
                comments
            }
        })

        return new Promise((res) => {
            setTimeout(() => {
                res({
                    data: products,
                    headers: {
                        'x-total-count': filtered.length
                    }
                });
            }, Math.random() * 3000)
        })
    }

    static async getNews() {
        const response = news
        return new Promise((res) => {
            setTimeout(() => {
                res(response);
            }, Math.random() * 3000)
        })
    }

    static async getNewsById(id){
        const response = news.find(neww => neww.id === id)
        const newsComments = comments.filter(comment => response.commentsIds.includes(comment.id))
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    news: response,
                    comments: newsComments
                })
            }, Math.random() * 1000)
        })
    }
}