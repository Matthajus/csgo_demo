const parser = require('../bin/parser');

exports.parse = (req, res) => {
    parser.parse(req.file).then(demo => {
        res.send(demo);
    });
};
