const validateFieldTitleAndDescription = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined || body.title === '') {
        return response.status(400).json({ message: 'The field "title" is required' });
    }

    if (body.description === undefined || body.description === '') {
        return response.status(400).json({ message: 'The field "description" is required' });
    }

    next();
};

const validateStatus = (request, response, next) => {
    const { body } = request;

    if (body.completed === undefined || body.completed === '') {
        return response.status(400).json({ message: 'status is required' });
    }


    next();
};

module.exports = {
    validateFieldTitleAndDescription,
    validateStatus
};