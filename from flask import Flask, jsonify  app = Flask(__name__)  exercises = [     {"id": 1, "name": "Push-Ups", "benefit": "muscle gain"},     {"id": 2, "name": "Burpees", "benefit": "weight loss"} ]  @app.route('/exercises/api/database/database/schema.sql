CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    benefit VARCHAR(100),
    checklist TEXT[]
);

CREATE TABLE meal_plans (
    id SERIAL PRIMARY KEY,
    cookbook VARCHAR(255),
    macros JSONB
);
