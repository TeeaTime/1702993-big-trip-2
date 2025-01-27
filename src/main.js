import BoardPresenter from './presenter/board-presenter.js';
import FilterView from './view/filter-view.js';
import {render, RenderPosition} from './render.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destination-model.js';

const siteEventsElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-controls__filters');

render(new FilterView(), filterElement, RenderPosition.BEFOREEND);

const pointsModel = new PointsModel ();
pointsModel.init();
const offersModel = new OffersModel ();
offersModel.init();
const destinationsModel = new DestinationsModel ();
destinationsModel.init();

const boardPresenter = new BoardPresenter({container: siteEventsElement, pointsModel, destinationsModel, offersModel});
boardPresenter.init();
