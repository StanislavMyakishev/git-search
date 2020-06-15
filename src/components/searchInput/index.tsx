import React, { memo, ReactElement } from 'react';

import * as Styled from './styled';

interface SearchInputProps {
    onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps): ReactElement => {
    return (
        <Styled.InputWrapper>
            <Styled.CenterWrapper>
                <Styled.CustomTextInput
                    autoFocus
                    type="search"
                    onChange={onSearch}
                />
            </Styled.CenterWrapper>
        </Styled.InputWrapper>
    );
};

export default memo(SearchInput);
