// https://codepen.io/gapcode/pen/vEJNZN
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
	if (msie > 0)
	{
      	return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
	if (trident > 0)
	{
		var rv = ua.indexOf("rv:");
		return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    return false;
}