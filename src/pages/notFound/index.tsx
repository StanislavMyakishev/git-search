import { History, LocationState } from 'history';
import React from 'react';

interface AllProps {
    history: History<LocationState>;
}

class NotFound extends React.Component<AllProps> {
    render(): React.ReactElement {
        return (
            <div>
                <h1>Page not found</h1>
            </div>
        );
    }
}

export default NotFound;
