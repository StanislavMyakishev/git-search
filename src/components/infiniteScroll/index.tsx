import _ from 'lodash';
import React, { memo, ReactElement, useEffect } from 'react';

import {
    getClientHeight,
    getDocumentScrollHeight,
    getDocumentScrollTop,
} from '../../common/helpers';

interface AllProps {
    hasNextPage?: boolean;
    loading?: boolean;
    onLoad: () => void;
    children: ReactElement | ReactElement[];
}

const InfiniteScroll = ({
    loading,
    hasNextPage,
    onLoad,
    children,
}: AllProps): ReactElement => {
    const scrollHandler = (): void => {
        const scrollTop = getDocumentScrollTop(),
            scrollHeight = getDocumentScrollHeight(),
            clientHeight = getClientHeight();
        const isBottomReached =
            Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (isBottomReached && !loading && hasNextPage && onLoad) {
            onLoad();
        }
    };

    const wrappedScrollHandler = _.throttle(scrollHandler, 500);

    useEffect(() => {
        window.addEventListener('scroll', wrappedScrollHandler);
        return () => {
            window.removeEventListener('scroll', wrappedScrollHandler);
        };
    }, [wrappedScrollHandler]);

    return <>{children}</>;
};

export default memo(InfiniteScroll);
