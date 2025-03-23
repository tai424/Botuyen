const fs = require("fs-extra");
const readline = require("readline");
const totp = require("totp-generator");
const login = require("helyt");
login({email: "100072792229844", password: "123456789acc"}, (err, api) => {
    if(err) return console.error(err);
    const json = JSON.stringify(api.getAppState());
    fs.writeFileSync(`./${config.APPSTATEPATH}`, json);
    console.log("Đã ghi xong appstate!");
    process.exit(0);
});
