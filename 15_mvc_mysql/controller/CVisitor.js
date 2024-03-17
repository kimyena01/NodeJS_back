const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js >> ', result);
        res.render('visitors', {data: result});
    })
};


exports.postVisitor = (req, res) => {
    Visitor.postVisitor(req.body, (result) => {
        console.log('Cvisitor.js asdf>> ', result);

        console.log("여기는 컨트롤러: comment >> ", req.body.comment);

        res.send({
            id: result,
            name: req.body.name,
            comment: req.body.comment,
        });
    })
}

//GET은 req.query에, POST는 req.body에.
exports.getVisitor = (req, res) => {
    Visitor.getVisitor(req.query.id, (result) => {

        res.send(result);
    })
}

exports.patchVisitor = (req, res) => {
    Visitor.patchVisitor(req.body, (result) => {
        console.log("controller patch result >> ", result);

        res.send('수정 성공');
    })
}

exports.deleteVisitor = (req,res) => {
    Visitor.deleteVisitor(req.body.id, (result) => {
        
        res.send('삭제성공');
    })
}