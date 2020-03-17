function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.game.mbga.jp/*")
		&& !shExpMatch(url, "*.gbf.game.mbga.jp/(authentication|ob/r)*")) {
		return "PROXY localhost:8080";
	}
	
	return "DIRECT";
}
