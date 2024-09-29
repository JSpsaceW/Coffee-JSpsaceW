-- Création de la table (ne pas inclure la création de base de données)
CREATE TABLE IF NOT EXISTS coffees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    origin VARCHAR(50),
    price_per_kg DECIMAL(10, 2),
    characteristic VARCHAR(50),
    available BOOLEAN
);

-- Insertion des données
INSERT INTO coffees (name, description, image_url, origin, price_per_kg, characteristic, available)
VALUES
    ('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '/images/expresso.png', 'Italie', 20.99, 'Corsé', TRUE),
    ('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '/images/Columbian.png', 'Colombie', 18.75, 'Acide', TRUE),
    ('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '/images/Ethiopian-Yirgacheffe.png', 'Éthiopie', 22.50, 'Fruité', TRUE),
    ('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '/images/Brazilian-Santos.png', 'Brésil', 17.80, 'Doux', TRUE),
    ('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '/images/Guatemalan-Antigua.png', 'Guatemala', 21.25, 'Corsé', TRUE),
    ('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '/images/Kenyan-A-A.png', 'Kenya', 23.70, 'Acide', TRUE),
    ('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '/images/Sumatra-Mandheling.png', 'Indonésie', 19.95, 'Corsé', TRUE),
    ('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '/images/Costa-Rican-Tarrazu.png', 'Costa Rica', 24.50, 'Acide', TRUE),
    ('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '/images/Vietnamese-Robusta.png', 'Vietnam', 16.75, 'Épicé', TRUE),
    ('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '/images/Tanzanian-Peaberry.png', 'Tanzanie', 26.80, 'Fruité', TRUE),
    ('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '/images/Jamaican-Blue-Mountain.png', 'Jamaïque', 39.25, 'Doux', TRUE),
    ('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '/images/Rwandan-Bourbon.png', 'Rwanda', 21.90, 'Fruité', TRUE),
    ('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '/images/Panamanian-Geisha.png', 'Panama', 42.00, 'Fruité', TRUE),
    ('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '/images/Peruvian-Arabica.png', 'Pérou', 19.40, 'Chocolaté', FALSE),
    ('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '/images/Hawaiian-Kona.png', 'Hawaï', 55.75, 'Doux', FALSE),
    ('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '/images/Nicaraguan-Maragogipe.png', 'Nicaragua', 28.60, 'Fruité', FALSE);
;

COMMIT; -- Fin de la transaction