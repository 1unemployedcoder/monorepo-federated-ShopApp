import React, {useEffect, useState} from 'react';
import {useFetching} from "@/hooks/useFetching";
import ProductService from "../../../API/ProductService";
import ConditionalContent from "../../ConditionalContent";
import CategorySkeleton from "./CategorySkeleton";
import CategoriesList from "./CategoriesList";
import {Category} from "@/@types/types";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [fetchCategories, isLoadingCategories, errorCategories, setErrorCategories] = useFetching(async () => {
        const response = await ProductService.getCategories()
        setCategories(response)
    })

    useEffect(() => {
        fetchCategories()
    }, [errorCategories]);

    return (
        <ConditionalContent
            isLoading={isLoadingCategories}
            refresh={setErrorCategories}
            error={errorCategories}
            data={categories.length}
            SkeletonComponent={CategorySkeleton}
            search={null}>
            <CategoriesList categories={categories} />
        </ConditionalContent>
    );
};

export default Categories;
