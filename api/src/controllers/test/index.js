import getTests from "./getTests";
import getTest from "./getTest";
import addTest from "./addTest";
import updateTest from "./updateTest";
import removeTest from "./removeTest";

export default class Controller {
    constructor(db) {
        this.db = db;
        this.getTests = getTests.bind(this);
        this.getTest = getTest.bind(this);
        this.addTest = addTest.bind(this);
        this.updateTest = updateTest.bind(this);
        this.removeTest = removeTest.bind(this);
    }
}