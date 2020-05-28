CREATE TABLE IF NOT EXISTS dogs
(
    PrimaryColor VARCHAR(10),
    PrimaryBreed VARCHAR(100),
    IntakeInternalStatus VARCHAR(100),
	IntakeAsilomarStatus VARCHAR(100),
	ReproductiveStatusAtIntake VARCHAR(100),
	OutcomeType VARCHAR(100),
	AgeInMonths VARCHAR(100),
	DurationInShelter VARCHAR(100),
	BreedCategory VARCHAR(100),
	Pet_age_category VARCHAR(100),
	Sex VARCHAR(100),
	pet_id INTEGER,
	primary key(pet_id)
);

/* csv used clean5_forDB */