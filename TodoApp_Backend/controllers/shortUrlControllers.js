const urlModel = require('../model/shortUrlModel')
const shortid = require('shortid')

async function handleGetShortUrl(req, res) {
    try {
        const userShortid = req.params.shortid
        if (userShortid === null) return res.status(400).send("No short url found")
        const dbShortid = await urlModel.findOne({ short: userShortid })
        if (dbShortid === null) return res.status(404).send("Invalid short url")
        return res.redirect(dbShortid.full)
    } catch (err) {
        if (err) return res.status(400).send("There is an error: ", err)
    }
}

async function handleCreateShortUrl(req, res) {
    try {
        const origanlUrl = req.body.url
        const newData = await urlModel.create({
            full: origanlUrl,
            short: shortid.generate(8)
        })
        return res.json(newData)
    } catch (error) {
        if(error) return res.status(400).json({ err: error})
    }
}

module.exports = {
    handleGetShortUrl,
    handleCreateShortUrl
}