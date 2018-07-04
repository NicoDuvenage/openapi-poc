'use strict';

// current working token eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJrZXkiOiJsZXQtbWUtaW4ifQ.x8UTyfxxSc498Lbo1pP7zW5BxgPVU_ake2lTlYaRhDc

module.exports = async (req, token, h) => {
    let isValid = false
    let artifacts = {}
    const credentials = token.decodedJWT;
    if (credentials.key === 'let-me-in') {
        isValid = true
        artifacts.info = 'yay'
    } else {
        artifacts.error = 'not authorized'
    }
    return { isValid, credentials, artifacts }
}
