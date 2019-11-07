import moment from 'moment';

/**
 * Parses the model and converts 'rowversion'
 * columns into a number for serialization.
 * @export parse
 * @param {*} model - The model to convert the 'rowversion' column.
 * @return {*}
 */
export default function parse(model) {
  if (!model) return model;
  if (Array.isArray(model)) {
    return model.map((item) => {
      return parse(item);
    });
  } else {
    if (moment.isMoment(model.rowversion)) {
      const rv = model.rowversion ?
                model.rowversion.valueOf() :
                model.rowversion;
      return {...model, rowversion: rv};
    } else if (!isNaN(model.rowversion)) {
      const rv = moment(model.rowversion);
      return {...model, rowversion: rv};
    } else {
      return {...model};
    }
  }
}
