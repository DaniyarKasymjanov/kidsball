import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './utils/scroll-to-top/scroll-to-top.component';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
