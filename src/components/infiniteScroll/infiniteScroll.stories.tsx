import { action } from '@storybook/addon-actions';
import React from 'react';

import InfiniteScroll from './index';

export default {
    title: 'Infinite Scroll',
    component: InfiniteScroll,
};

const generatedContent = [...Array(10)].map((item, index) => (
    <div key={index} style={{ height: 100, textAlign: 'center' }}>
        Content
    </div>
));

export const Basic = (): React.ReactElement => (
    <InfiniteScroll
        loading={false}
        hasNextPage={true}
        onLoad={action('onLoad')}
    >
        {generatedContent}
    </InfiniteScroll>
);
