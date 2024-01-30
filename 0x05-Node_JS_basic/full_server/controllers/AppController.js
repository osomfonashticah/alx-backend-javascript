/**
 * Contains the miscellaneous route handlers.
 * @author joseph darko <https://github.com/osomfonashticah>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
