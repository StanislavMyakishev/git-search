import _ from 'lodash';
import React, { memo, ReactElement, useState } from 'react';

import { defaultSearchParams } from '../../common/helpers';
import ScrollUpButton from '../../components/scrollUpButton';
import SearchInput from '../../components/searchInput';
import SearchList from '../../components/searchList';
import useSearch from '../../hooks/useSearch';

const Search = (): ReactElement => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchParams.query);
    const [queryUpdated, setQueryUpdated] = useState(false);
    const { search, error, loading, onSearch, hasNextPage, onLoad } = useSearch(
        {
            ...defaultSearchParams,
        },
    );

    if (
        onSearch &&
        !queryUpdated &&
        searchQuery !== defaultSearchParams.query
    ) {
        setQueryUpdated(true);
        onSearch({ ...defaultSearchParams, query: searchQuery });
    }

    const handleFilter = _.debounce((value: string): void => {
        setSearchQuery(value);
        if (onSearch) {
            onSearch({ ...defaultSearchParams, query: value });
        }
    }, 300);

    const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        handleFilter(value);
    };

    const handleOnLoad = (): void => {
        if (onLoad) {
            onLoad({ ...defaultSearchParams, query: searchQuery });
        }
    };

    return (
        <>
            <SearchInput onSearch={onInputChange} />
            <SearchList
                search={search}
                error={error}
                hasNextPage={hasNextPage}
                loading={loading}
                onLoad={handleOnLoad}
            />
            <ScrollUpButton />
        </>
    );
};

export default memo(Search);
