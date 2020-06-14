import React, { memo, ReactElement } from 'react';

const NotFound = (): ReactElement => {
    return (
        <div>
            <h1>Page not found</h1>
        </div>
    );
};

export default memo(NotFound);
