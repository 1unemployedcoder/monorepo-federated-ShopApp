import AjaxAPI from "./ajaxAPI";
import {fetchedProducts, fetchProductsSlice} from "../@types/reduxTypes";
import {Category, gettedNewsById, gettedProductById, NewsPost, Product} from "../@types/types";

export default class ProductService {
    static async getAll({ search, sort, limit, page, type }: fetchProductsSlice) {
        return await AjaxAPI.getGadgetsComments({
            gadget: search,
            sort: sort,
            limit: limit,
            page: page,
            type: type
        }) as fetchedProducts
    }

    static async getProductById(id: number) {
        return await AjaxAPI.getGadget(id) as gettedProductById
    }

    static async getCategories() {
        return await AjaxAPI.getCategories() as Category[]
    }

    static async getPopular(){
        return await AjaxAPI.getPopular() as Product[]
    }

    static async getNews(){
        return await AjaxAPI.getNews() as NewsPost[]
    }

    static async getNewsById(id: number){
        return await AjaxAPI.getNewsById(id) as gettedNewsById
    }
}