import React from 'react';
import {useArrayPages} from "../../hooks/useArrayPages";
import IFButton from "../ui/styledComponents/styledButton/IF_Button";
import {PaginationProps} from "../../@types/typesComponents";

const Pagination: React.FC<PaginationProps> = ({setPage, totalPages, currentPage}) => {
    const pagesArray = useArrayPages(totalPages)
    return (
        <div className='pages'>
            {pagesArray.map(page =>
                <IFButton primary={currentPage === page} onClick={() => setPage(page)} key={page}>{page}</IFButton>
            )}
        </div>
    );
};

export default Pagination;