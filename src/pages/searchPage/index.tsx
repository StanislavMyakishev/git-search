import React, { memo, ReactElement, useState } from 'react';

import Header from '../../components/header';
import SearchContent from '../../components/searchContent';
import SearchInput from '../../components/searchInput';

const SearchPage = (): ReactElement => {
    const [inputValue, setInputValue] = useState('chess');

    const updateSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    };

    return (
        <>
            <Header />
            <SearchInput
                inputValue={inputValue}
                updateSearchInput={updateSearchInput}
            />
            <SearchContent searchQuery={inputValue} />
        </>
    );
};

export default memo(SearchPage);
