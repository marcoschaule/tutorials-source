// *****************************************************************************
// Init scripts
// *****************************************************************************

function showPosts() {
  var strQueries = window.location.hash.replace('#', '');
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

  console.log(window.numCounterCurrent);

  $('.get-post').removeClass('hidden');
  if (window.numCounterCurrent <= 0) {
    $('.get-post-newer').addClass('hidden');
  } else if (window.numCounterCurrent >= window.numCounterModMax) {
    $('.get-post-older').addClass('hidden');
  }

  setBestPracticeColors();
  $('.cloak').removeClass('cloak');
}

function setBestPracticeColors() {
  $('em:contains("Do")').addClass('green');
  $('em:contains("Don\'t")').addClass('red');
}

function getOtherPostPreviews(isOlder) {
  var numPage = window.numCounterCurrent + (isOlder ? 1 : -1);
  window.location.href = window.location.href.split('#')[0] + '#page=' + numPage;
  $("html, body").animate({ scrollTop: 0 }, 0);
  return showPosts();
}

$(window).ready(showPosts);