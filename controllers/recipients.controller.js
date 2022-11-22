const { deleteRecipient } = require(`../models/recipients.model`);

exports.removeRecipient = (request, response, next) => {
  const { recipient_id } = request.params;

  deleteRecipient(recipient_id)
    .then(() => {
      response.status(204).send();
    })
    .catch(err => {
      next(err);
    });
};
