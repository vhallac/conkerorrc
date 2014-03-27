function FindProxyForURL(url, host) {
    if ( ! (shExpMatch(url, '*localhost/*') ||
            shExpMatch(url, '*127.0.0.1/*') ) )
    {
        return 'SOCKS5 localhost:1080';
    }
    return 'DIRECT';
}

repl.print("Loaded!");
