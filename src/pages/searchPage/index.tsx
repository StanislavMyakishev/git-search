import { History, LocationState } from 'history';
import React from 'react';

interface AllProps {
    history: History<LocationState>;
}

class SearchPage extends React.Component<AllProps> {
    render(): React.ReactElement {
        return (
            <div>
                <h1>Search page</h1>
            </div>
        );
    }
}

export default SearchPage;
