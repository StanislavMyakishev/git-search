import { QuerySearchArgs, SearchType } from '../schema/generated';

export const getDocumentScrollTop = (): number =>
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;

export const getDocumentScrollHeight = (): number =>
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;

export const getClientHeight = (): number =>
    document.documentElement.clientHeight || window.innerHeight;

export const defaultSearchParams: QuerySearchArgs = {
    query: 'language:JavaScript stars:>10000',
    first: 10,
    type: SearchType.Repository,
};

export const scrollUp = (): void => {
    window.scrollTo(0, 0);
};
