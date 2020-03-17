function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.mbga.jp/*")
		&& !shExpMatch(url, "*.mbga.jp/(authentication|ob/r)*")) {
		return "PROXY localhost:8080";
	}
	
	return "DIRECT";
}
