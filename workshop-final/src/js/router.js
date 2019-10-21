import crossroads from 'crossroads'
import contactController from './contact';
import getData from './people';
import newCharacterNode from './newCharacterNode'


function router () {
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html')//Y la funcion correspondiente
  })

  crossroads.addRoute('#/people', function () {
    console.log('People')
    $('#root').load('./partials/people.html', getData)
  })

  crossroads.addRoute('#/local-storage', function () {
    console.log('People')
    $('#root').load('./partials/local-storage.html', newCharacterNode)
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
