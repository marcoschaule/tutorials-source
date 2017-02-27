// *****************************************************************************
// Init scripts
// *****************************************************************************

function showPosts() {
  var strQueries = window.location.hash.replace('#', '');
  var arrQueries = strQueries.split('&');
  var objQueries = {};
  var arrQuery, numValue;

  arrQueries.forEach(function(strQuery) {
    arrQuery                = strQuery.split('=');
    numValue                = parseInt(arrQuery[1]);
    objQueries[arrQuery[0]] = !isNaN(numValue) ? numValue : arrQuery[1];
  });
  window.numCounterCurrent = objQueries.page || 0;
  $('.post-preview-group').removeClass('active');
  $('.post-preview-group-' + window.numCounterCurrent).addClass('active');

  $('.get-post').removeClass('invisible');
  if (window.numCounterCurrent <= 0) {
    $('.get-post-newer').addClass('invisible');
    $('.get-post-newest').addClass('invisible');
  } else if (window.numCounterCurrent >= window.numCounterModMax) {
    $('.get-post-older').addClass('invisible');
    $('.get-post-oldest').addClass('invisible');
  }

  setBestPracticeColors();
  setTimeout(function() {
    $('.cloak').removeClass('cloak');
  }, 100);
}

function setBestPracticeColors() {
  $('em:contains("Do")').addClass('green');
  $('em:contains("Don\'t")').addClass('red');
}

function getOtherPostPreviews(mixWhich) {
  var numPage;

  if ('newest' === mixWhich) {
    numPage = 0;
  }
  else if ('oldest' === mixWhich) {
    numPage = window.numCounterModMax;
  }
  else if ('boolean' === typeof mixWhich) {
    numPage = window.numCounterCurrent + (mixWhich ? 1 : -1);
  }
  window.location.href = window.location.href.split('#')[0] + '#page=' + numPage;
  $("html, body").animate({ scrollTop: 0 }, 0);
  return showPosts();
}

$(window).ready(showPosts);