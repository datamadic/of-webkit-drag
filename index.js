window.addEventListener('load', fin.desktop.main.bind(null, init));


function init(){
  var currWin = fin.desktop.Window.getCurrent();

  document.getElementById('max').addEventListener('click', function(){
    currWin.maximize();
  });

  document.getElementById('restore').addEventListener('click', function(){
    currWin.restore();
  });

}
