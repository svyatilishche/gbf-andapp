var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Auto Switch", {
    "+Auto Switch": function(url, host, scheme) {
        "use strict";
        if (/^http:\/\/w01y\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w01y\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w02k\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w02k\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w03s\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w03s\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w04m\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w04m\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w05o\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w05o\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w06t\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w06t\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w07l\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w07l\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w08r\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w08r\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w09s\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w09s\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w10b\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w10b\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w11t\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w11t\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w12p\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w12p\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w13b\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w13b\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w14h\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w14h\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w15p\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w15p\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w16s\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w16s\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w17k\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w17k\.kancolle-server\.comkcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w18i\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w18i\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w19s\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w19s\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w20h\.kancolle-server\.com\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/w20h\.kancolle-server\.com\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/w00g\.kancolle-server\.com\//.test(url)) return "+KC";
        return "DIRECT";
    },
    "+KC": function(url, host, scheme) {
        "use strict";
        if (host === "127.0.0.1" || host === "::1" || host.indexOf(".") < 0) return "DIRECT";
        switch (scheme) {
          case "http":
            return "PROXY localhost:8081";

          default:
            return "DIRECT";
        }
    }
});
