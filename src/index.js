import hello from './js/hello';

if(module.hot) {
  module.hot.accept(function () {
    window.location.reload()
  })
}
