
exports.getDate =function getDate() {
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return today.toLocaleDateString("en-US", options);

};

exports.getDay =function getDate() {
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return today.toLocaleDateString("en-US", options);
};