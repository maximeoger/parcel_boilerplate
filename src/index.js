import hello from './js/hello';
import './styles/styles.scss';

if(module.hot) {
  module.hot.accept(function () {
    window.location.reload()
  })
}
