export interface ThemeBreakpoints {
    forPhoneOnly: number;
    forTabletPortraitUp: number;
    forTabletLandscapeUp: number;
    forDesktopUp: number;
    forBigDesktopUp: number;
}

export const breakpoints: ThemeBreakpoints = {
    forPhoneOnly: 599,
    forTabletPortraitUp: 600,
    forTabletLandscapeUp: 900,
    forDesktopUp: 1200,
    forBigDesktopUp: 1800,
};
