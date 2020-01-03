import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Textbox from './search';

ReactDOM.render(<Textbox/>, document.getElementById('form'));
ReactDOM.render(<App />, document.getElementById('app'));

