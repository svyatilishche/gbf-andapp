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
        if (/^http:\/\/203\.104\.209\.71\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.71\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.87\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.87\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.184\.215\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.184\.215\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.183\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.183\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.150\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.150\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.134\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.134\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.167\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.167\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.199\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.199\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.7\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.7\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.39\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.39\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.71\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.71\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.103\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.103\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.135\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.135\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.167\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.167\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.215\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.215\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.247\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/125\.6\.189\.247\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.23\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.23\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.39\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.39\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.55\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.55\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.102\/kcs\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.102\/kcs2\//.test(url)) return "+KC";
        if (/^http:\/\/203\.104\.209\.7\//.test(url)) return "+KC";
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
