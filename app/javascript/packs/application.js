import ReactDOM from 'react-dom';
import App from 'app';

const renderPack = Component => ReactDOM.render(<Component />, document.getElementById('react-app'));

document.addEventListener('DOMContentLoaded', renderPack(App));

if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default;
    renderPack(NextApp);
  });
}
