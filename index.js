function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}

function nestedTarget() {
  var find = document.querySelector('#nested .target')
  return find
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')
  const lis2 = document.getElementById('app').querySelectorAll('.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    debugger
  lis[i].innerHTML = (parseInt(lis2[i].innerHTML) + n)
  }
}

function deepestChild() {
  const a = document.getElementById('grand-node').querySelectorAll('div')
  for (let i = 0, l = a.length; i < l; i++) {
    debugger
    var b = a[i]
  }
  return b
}
