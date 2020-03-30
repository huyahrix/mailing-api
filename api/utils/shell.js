/**
 * @copyright 2018 @ Spirit Labs
 * @author rocachien
 * @create 2018/02/07 16:08
 * @update 2018/02/07 16:08
 */
'use strict';

// https://gist.github.com/millermedeiros/4724047
exports.exec = (cmd, cb) => {
    /*eslint-disable camelcase*/
    let child_process = require('child_process');
    /*eslint-enable camelcase*/

    let parts = cmd.split(/\s+/g);
    let p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
    p.on('exit', (code) => {
        let err = null;
        if (code) {
            err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
            err.code = code;
            err.cmd = cmd;
        }
        if (cb) {
            return cb(err);
        }
    });
};


// execute multiple commands in series
// this could be replaced by any flow control lib
exports.series = function(cmds, cb){
    let execNext = function(){
        exports.exec(cmds.shift(), function(err){
            if (err) {
                return cb(err);
            } else {
                if (cmds.length) {
                    execNext();
                }
                else {
                    return cb(null);
                }
            }
        });
    };
    execNext();
};
