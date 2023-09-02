var myExtJs = (function () {
  return {
    myCustomFunction: function () {
      document.addEventListener('DOMContentLoaded', (e) => {
        console.log('DOM chargé.');
      });
    },
  };
})(myExtJs || {});
