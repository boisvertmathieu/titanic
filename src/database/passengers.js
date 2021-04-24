const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    // Defining routes here
    router.get('/api/v1/passengers', (req, res, next) => {
        db.query(
            'SELECT * from passengers ORDER BY id ASC',
            (error, result, fields) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: error });
                } else {
                    res.status(200).json({ passengers: result, fields: fields });
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;