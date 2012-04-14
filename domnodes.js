function addButtonsToNode(howmany, domnode)
{
 for(var i = 0; i < howmany; i++)
 {
  var div = document.createElement('div');
  div.innerHTML = i;
  div.onclick = function (num) {
   return function () {
    alert(num);
   };
  }(i);
  domnode.appendChild(div);
 }
}