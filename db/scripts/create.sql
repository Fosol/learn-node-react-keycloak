DROP TABLE IF EXISTS test;

CREATE TABLE test
(
    id SERIAL PRIMARY KEY
    , name VARCHAR(100) UNIQUE NOT NULL
    , description VARCHAR(1000)
    , createdon TIMESTAMP
    , updatedon TIMESTAMP
    , rowversion INT NOT NULL
);

ALTER TABLE test ALTER COLUMN createdon SET DEFAULT current_timestamp;

CREATE TRIGGER tr_test_beforeInsert BEFORE INSERT
ON test FOR EACH ROW EXECUTE PROCEDURE oninsert_rowversion();

CREATE TRIGGER tr_test_beforeUpdate BEFORE UPDATE
ON test FOR EACH ROW EXECUTE PROCEDURE onupdate_dates();