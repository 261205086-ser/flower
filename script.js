document.querySelectorAll('.chou').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random()*840 + 30) + 'px';
    el.style.top  = (Math.random()*170 + 300) + 'px';   
  });
});

document.querySelectorAll('.foo').forEach(function (fo) {
  fo.addEventListener('mouseover', function () {
    fo.style.left = (Math.random()*430 + 390) + 'px';
    fo.style.top  = (Math.random()*90 + 210) + 'px';   
  });
});