const sastrawi = require('sastrawijs')
const fs = require('fs-extra')
const kataKasar = JSON.parse(fs.readFileSync('./settings/katakasar.json'))

const inArray = (needle, haystack) => {
    let length = haystack.length
    for (let i = 0; i < length; i++) {
        if (haystack[i] == needle) return true
    }
    return false
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    if (kata !== undefined) {
        let sentence = kata
        let stemmer = new sastrawi.Stemmer()
        let tokenizer = new sastrawi.Tokenizer()
        let words = tokenizer.tokenize(sentence)
        for (word of words) {
            if (inArray(stemmer.stem(word), kataKasar)) {
                resolve(true)
            }
        }
        resolve(false)
    }
})
