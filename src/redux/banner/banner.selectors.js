import { createSelector } from 'reselect';

const selectBanner = (state) => state.banner;

export const selectBannerForPage = createSelector([ selectBanner ], (banner) => banner.banners);
