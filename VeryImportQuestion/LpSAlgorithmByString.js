function lps(atr) {
    let lps = [];
    lps[0] = 0;
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[len] == str[i]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len == 0) {
                lps[i] = 0;
                i++;
            } else {
                len = lps[len - 1];
            }
        }
    }
    return lps;
}


let str = "acabacace";
console.log(lps(str));