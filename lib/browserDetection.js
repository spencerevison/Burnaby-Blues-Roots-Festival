/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */
/* eslint func-names: 0 */

/*-----------------------------------------------------------------------------
  Browser detection taken from
  https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
------------------------------------------------------------------------------*/
if (window !== undefined) {
  // Opera 8.0+
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  const isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  }(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification)));

  // Internet Explorer 6-11
  const isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 71
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Blink engine detection
  const isBlink = (isChrome || isOpera) && !!window.CSS;

  // Browser support for browser-update
  window.$buoop = {
    required: {
      e: 16,
      i: 999,
      f: 58,
      o: 51,
      o_a: 45,
      s: -1,
      c: '67.0.3396.12',
      y: 18.1,
      v: '1.10',
      uc: 11.5,
      samsung: 7.0,
    },
  }

  // If it's IE, then load browser-update script
  if (isIE) {
    const script = document.createElement('script');
    script.src = '//browser-update.org/update.min.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
