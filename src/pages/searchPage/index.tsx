import { History, LocationState } from 'history';
import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';

interface AllProps {
    history: History<LocationState>;
}

class SearchPage extends React.Component<AllProps> {
    render(): React.ReactElement {
        return (
            <div>
                <Header />
                <SearchInput />
                <Footer />
            </div>
        );
    }
}

export default SearchPage;