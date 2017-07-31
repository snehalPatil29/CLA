import { createSelector } from 'reselect';

const selectProductSelectionPageDomain = (state) => state.get('productSelectionPage');

const makeSelectProductSelectionPage = () => createSelector(
  selectProductSelectionPageDomain,
 (homeState) => homeState.toJS()
);

const showFilter = () => createSelector(
  selectProductSelectionPageDomain,
  (homeState) => homeState.get('showFilter')
);

const makeSelectLoading = () => createSelector(
  selectProductSelectionPageDomain,
  (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectProductSelectionPageDomain,
  (homeState) => homeState.get('error')
);

const makeCountriesData = () =>
 createSelector(
  selectProductSelectionPageDomain,
  (homeState) => homeState.getIn(['countries'])
);


export {
  selectProductSelectionPageDomain,
  makeSelectProductSelectionPage,
  showFilter,
  makeSelectLoading,
  makeSelectError,
  makeCountriesData,
};

