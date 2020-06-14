export const getDocumentScrollTop = (): number =>
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;

export const getDocumentScrollHeight = (): number =>
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;

export const getClientHeight = (): number =>
    document.documentElement.clientHeight || window.innerHeight;
