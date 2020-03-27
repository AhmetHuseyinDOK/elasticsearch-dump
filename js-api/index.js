const path = require('path')
const defaults = require(path.join(__dirname, '..', 'defaults.js'))
const ElasticDump = require(path.join(__dirname, '..','elasticdump.js'))

/**
 * @param {import('../defaults').Defaults} options 
 */
function dump(options){
    options = { ...defaults, ...options};
    const dumper = new ElasticDump(options.input, options.output, options);
    let resolve , reject;

    let promise = new Promise( (res , rej ) =>  {
        resolve = res;
        reject = rej;
    }); 
    
    dumper.dump(
        resolve
    );

    return promise;
}

module.exports = {
    dump
};