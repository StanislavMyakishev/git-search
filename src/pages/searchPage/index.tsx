import { History, LocationState } from 'history';
import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

interface AllProps {
    history: History<LocationState>;
}

class SearchPage extends React.Component<AllProps> {
    render(): React.ReactElement {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default SearchPage;
