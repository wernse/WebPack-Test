import '../scripts/angular.js';

import '../style/app.css';
import './app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$http']

function AppCtrl($http){
  var ctrl = this;
  ctrl.url = 'https://github.com/preboot/angular-webpacks';
  console.log("hello")
  var settings = {
    method: "GET",
    url:"api/values"
  }
  $http(settings).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  })
}

export default MODULE_NAME;