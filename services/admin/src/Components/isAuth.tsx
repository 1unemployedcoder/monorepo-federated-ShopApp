import React from 'react';
import {Outlet, useOutlet} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "@/redux/store";
import LogInPage from "@/pages/LogInPage";
import {useOutletEmpty} from "@/hooks/useOutletEmpty";
import ProductList from "@/pages/ProductList";

const IsAuth = () => {
    const { status, isAuth } = useSelector((state: RootState) => state.auth)
    const outlet = useOutlet()
    const isOutletEmpty = useOutletEmpty(outlet)
    if (status !== 'success') {
        return 'Загрузка...'
    }
    if (isAuth) {
        return isOutletEmpty ? <ProductList /> : <Outlet />
    } else {
        return <LogInPage />
    }
};

export default IsAuth;
