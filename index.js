const express = require('express');
const app = express();

const STORAGE_ACCOUNT_NAME = 'blobformasud';
const CONTAINER_NAME = 'filestorage';
const BLOB_URL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${CONTAINER_NAME}/`;

app.get("/api", (req, res, next) => {
    res.json({"message": "Hello, World!"});
});

app.get('/pub/:filename', (req, res) => {
    const filename = req.params.filename;
    const fileUrl = BLOB_URL + filename;
    res.redirect(fileUrl);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});