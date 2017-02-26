// *****************************************************************************
// Init scripts
// *****************************************************************************

function _init() {
  var strQueries = window.location.search.replace('?', '');
  var arrQueries = strQueries.split('&');
  var objQueries = {};
  var arrQuery, numValue;

  arrQueries.forEach(function(strQuery) {
    arrQuery = strQuery.split('=');
    numValue = parseInt(arrQuery[1]);
    objQueries[arrQuery[0]] = !isNaN(numValue) ? numValue : arrQuery[1];
  });
  window.numCounterCurrent = objQueries.page || 0;
  $('.post-preview-group').removeClass('active');
  $('.post-preview-group-' + window.numCounterCurrent).addClass('active');

  if (window.numCounterCurrent === 0) {
    $('.get-post-newer').addClass('hidden');
  } else if (window.numCounterCurrent === window.numCounterModMax) {
    $('.get-post-older').addClass('hidden');
  }

  setTimeout(function() {
    setBestPracticeColors();
    $('.cloak').removeClass('cloak');
  }, 100);
}

function setBestPracticeColors() {
  $('em:contains("Do")').addClass('green');
  $('em:contains("Don\'t")').addClass('red');
}

function getOtherPostPreviews(isOlder) {
  var numPage = window.numCounterCurrent + (isOlder ? 1 : -1);
  window.location.href = window.location.href.split('?')[0] + '?page=' + numPage;
}

$(window).ready(_init);