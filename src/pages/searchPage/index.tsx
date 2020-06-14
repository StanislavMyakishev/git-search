import _ from 'lodash';
import React, { memo, ReactElement, useState } from 'react';

import ScrollUpButton from '../../components/scrollUpButton';
import SearchInput from '../../components/searchInput';
import SearchList from '../../components/searchList';
import { SearchType } from '../../schema/generated';

const SearchPage = (): ReactElement => {
    const [inputValue, setInputValue] = useState('chess');
    const [searchValue, setSearchValue] = useState('chess');

    const debouncedSetSearchValue = _.debounce(setSearchValue, 500);

    const updateSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
        debouncedSetSearchValue(e.currentTarget.value);
    };

    return (
        <>
            <SearchInput
                inputValue={inputValue}
                updateSearchInput={updateSearchInput}
            />
            <SearchList
                query={searchValue}
                type={SearchType.Repository}
                first={10}
            />
            <ScrollUpButton />
        </>
    );
};

export default memo(SearchPage);
