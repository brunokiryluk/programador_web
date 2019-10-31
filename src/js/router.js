import crossroads from 'crossroads'
import homeController from './controllers/homeController';
import peopleController from './controllers/peopleController';
import localStorageController from './controllers/localStorageController';
import contactController from './controllers/contactController';



function router() {
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html', homeController)//Y la funcion correspondiente
  })

  crossroads.addRoute('#/people', function () {
    console.log('People')
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/local-storage', function () {
    console.log('People')
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  crossroads.addRoute('#/contact', function () {
    console.log('People')
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
