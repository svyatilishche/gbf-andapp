function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*gbf.*.mbga.jp/*")
		&& !shExpMatch(url, "*gbf.*.mbga.jp/(authentication|ob/r)*")) {
		return "PROXY localhost:8080";
	}
	
	return "DIRECT";
}
