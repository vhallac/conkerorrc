function regExpMatch(url, pattern) {
    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
    if (shExpMatch(url, '*twitter.com/*') ||
        shExpMatch(url, '*blogspot.com/*') ||
        shExpMatch(url, '*blogger.com/*') ||
        shExpMatch(url, '*thepiratebay.org/*') ||
        shExpMatch(url, '*webcache.googleusercontent.com/*'))
    {
        return 'SOCKS5 localhost:1080';
    }

    return 'DIRECT';
}
