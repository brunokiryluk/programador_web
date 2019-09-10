/*var titleNode = document.getElementById('main-title')

titleNode.innerHTML = 'Al fin voy a ver algo en mi página'
var paragraphsNodes = document.getElementsByClassName('paragraph')

paragraphsNodes[0].innerHTML = 'Soy el párrafo numero uno'
paragraphsNodes[1].innerHTML = 'Soy el párrafo numero dos'
paragraphsNodes[2].innerHTML = 'Soy el párrafo numero tres'
var paragraphNode = document.createElement('p')

var paragraphNode = document.createElement('div')
paragraphNode.innerHTML = '<p>Soy un párrafo</p>'
*/
var list = ['Elemento 1','Elemento 2','Elemento 3']

var listNode = document.createElement('ul')

var listItemNode

for(var i = 0; i < list.length; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  listNode.appendChild(listItemNode)
}