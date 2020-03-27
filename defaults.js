// For future developers.  If you add options here, be sure to add the option to test suite tests where necessary

/**
 * 
 * @typedef {object} Defaults
 * @property size
 * @property limit
 * @property offset
 * @property debug
 * @property type
 * @property delete
 * @property maxSockets
 * @property input
 * @property input-index
 * @property output
 * @property output-index
 * @property noRefresh
 * @property inputTransport
 * @property outputTransport
 * @property searchBody
 * @property searchWithTemplate
 * @property headers
 * @property sourceOnly
 * @property jsonLines
 * @property format
 * @property ignore-errors
 * @property support-big-int
 * @property scrollTime
 * @property timeout
 * @property toLog
 * @property quiet
 * @property awsChain
 * @property awsAccessKeyId
 * @property awsSecretAccessKey
 * @property awsIniFileProfile
 * @property awsService
 * @property awsRegion
 * @property s3AccessKeyId
 * @property s3SecretAccessKey
 * @property s3Region
 * @property s3Endpoint
 * @property s3SSLEnabled
 * @property s3ForcePathStyle
 * @property s3Compress
 * @property fsCompress
 * @property awsIniFileName
 * @property sessionToken
 * @property transform
 * @property httpAuthFile
 * @property params
 * @property prefix
 * @property suffix
 * @property retryAttempts
 * @property customBackoff
 * @property retryDelayBase
 * @property retryDelay
 * @property parseExtraFields
 * @property fileSize
 * @property cert
 * @property key
 * @property pass
 * @property ca
 * @property tlsAuth
 * @property input-cert
 * @property input-key
 * @property input-pass
 * @property input-ca
 * @property output-cert
 * @property output-key
 * @property output-pass
 * @property output-ca
 * @property inputSocksProxy
 * @property inputSocksPort
 * @property outputSocksProxy
 * @property outputSocksPort
 * @property concurrency
 * @property throttleInterval
 * @property carryoverConcurrencyCount
 * @property intervalCap
 * @property concurrencyInterval
 * @property overwrite
 * @property handleVersion
 * @property versionType
 * 
 */

const defaults = {
    size: -1,
    limit: 100,
    offset: 0,
    debug: false,
    type: 'data',
    delete: false,
    maxSockets: null,
    input: null,
    'input-index': null,
    output: null,
    'output-index': null,
    noRefresh: false,
    inputTransport: null,
    outputTransport: null,
    searchBody: null,
    searchWithTemplate: false,
    headers: null,
    sourceOnly: false,
    jsonLines: false,
    format: '',
    'ignore-errors': false,
    'support-big-int': false,
    scrollTime: '10m',
    timeout: null,
    toLog: null,
    quiet: false,
    awsChain: false,
    awsAccessKeyId: null,
    awsSecretAccessKey: null,
    awsIniFileProfile: null,
    awsService: null,
    awsRegion: null,
    s3AccessKeyId: null,
    s3SecretAccessKey: null,
    s3Region: null,
    s3Endpoint: null,
    s3SSLEnabled: true,
    s3ForcePathStyle: false,
    s3Compress: false,
    fsCompress: false,
    awsIniFileName: null,
    sessionToken: null,
    transform: null,
    httpAuthFile: null,
    params: null,
    prefix: '',
    suffix: '',
    retryAttempts: 0,
    customBackoff: false,
    retryDelayBase: 0,
    retryDelay: 5000,
    parseExtraFields: '',
    fileSize: -1,
    cert: null,
    key: null,
    pass: null,
    ca: null,
    tlsAuth: false,
    'input-cert': null,
    'input-key': null,
    'input-pass': null,
    'input-ca': null,
    'output-cert': null,
    'output-key': null,
    'output-pass': null,
    'output-ca': null,
    inputSocksProxy: null,
    inputSocksPort: null,
    outputSocksProxy: null,
    outputSocksPort: null,
    concurrency: 1,
    throttleInterval: 1,
    carryoverConcurrencyCount: true,
    intervalCap: 5,
    concurrencyInterval: 5000,
    overwrite: false,
    handleVersion: false,
    versionType: null
  }


  module.exports = defaults;