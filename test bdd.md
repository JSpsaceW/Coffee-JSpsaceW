# Données

## Espresso

- Description : Café fort et concentré préparé en faisant passer de l'eau chaude à travers du café finement moulu.
- image : /images/expresso.png
- Origine : Italie
- Prix au kilo : 20.99 €
- Caractéristique principale : Corsé
- Disponible : Oui

## Columbian

- Description : Café moyennement corsé avec une acidité vive et une saveur riche.
- image : /images/Columbian.png
- Origine : Colombie
- Prix au kilo : 18.75 €
- Caractéristique principale : Acide
- Disponible : Oui

## Ethiopian Yirgacheffe

- Description : Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.
- image : /images/Ethiopian-Yirgacheffe.png
- Origine : Éthiopie
- Prix au kilo : 22.50 €
- Caractéristique principale : Fruité
- Disponible : Oui

## Brazilian Santos

- Description : Café doux et lisse avec un profil de saveur de noisette.
- image : /images/Brazilian-Santos.png
- Origine : Brésil
- Prix au kilo : 17.80 €
- Caractéristique principale : Doux
- Disponible : Oui

## Guatemalan Antigua

- Description : Café corsé avec des nuances chocolatées et une pointe d'épice.
- image : /images/Guatemalan-Antigua.png
- Origine : Guatemala
- Prix au kilo : 21.25 €
- Caractéristique principale : Corsé
- Disponible : Oui

## Kenyan AA

- Description : Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.
- image : /images/Kenyan-A-A.png
- Origine : Kenya
- Prix au kilo : 23.70 €
- Caractéristique principale : Acide
- Disponible : Oui

## Sumatra Mandheling

- Description : Café profond et terreux avec un corps lourd et une faible acidité.
- image : /images/Sumatra-Mandheling.png
- Origine : Indonésie
- Prix au kilo : 19.95 €
- Caractéristique principale : Corsé
- Disponible : Oui

## Costa Rican Tarrazu

- Description : Café vif et net avec une finition propre et une acidité vive.
- image : /images/Costa-Rican-Tarrazu.png
- Origine : Costa Rica
- Prix au kilo : 24.50 €
- Caractéristique principale : Acide
- Disponible : Oui

## Vietnamese Robusta

- Description : Café audacieux et fort avec une saveur robuste distinctive.
- image : /images/Vietnamese-Robusta.png
- Origine : Vietnam
- Prix au kilo : 16.75 €
- Caractéristique principale : Épicé
- Disponible : Oui

## Tanzanian Peaberry

- Description : Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.
- image : /images/Tanzanian-Peaberry.png
- Origine : Tanzanie
- Prix au kilo : 26.80 €
- Caractéristique principale : Fruité
- Disponible : Oui

## Jamaican Blue Mountain

- Description : Reconnu pour sa saveur douce, son acidité vive et son absence d'amertume.
- image : /images/Jamaican-Blue-Mountain.png
- Origine : Jamaïque
- Prix au kilo : 39.25 €
- Caractéristique principale : Doux
- Disponible : Oui

## Rwandan Bourbon

- Description : Café avec des notes florales prononcées, une acidité vive et un corps moyen.
- image : /images/Rwandan-Bourbon.png
- Origine : Rwanda
- Prix au kilo : 21.90 €
- Caractéristique principale : Fruité
- Disponible : Oui

## Panamanian Geisha

- Description : Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.
- image : /images/Panamanian-Geisha.png
- Origine : Panama
- Prix au kilo : 42.00 €
- Caractéristique principale : Fruité
- Disponible : Oui

## Peruvian Arabica

- Description : Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.
- image : /images/Peruvian-Arabica.png
- Origine : Pérou
- Prix au kilo : 19.40 €
- Caractéristique principale : Chocolaté
- Disponible : Non

## Hawaiian Kona

- Description : Café rare au goût riche, une acidité douce et des nuances subtiles.
- image : /images/Hawaiian-Kona.png
- Origine : Hawaï
- Prix au kilo : 55.75 €
- Caractéristique principale : Doux
- Disponible : Non

## Nicaraguan Maragogipe

- Description : Café avec des notes de fruits, une acidité vive et un corps plein.
- image : /images/Nicaraguan-Maragogipe.png
- Origine : Nicaragua
- Prix au kilo : 28.60 €
- Caractéristique principale : Fruité
- Disponible : Non



```sql
CREATE ROLE coffee WITH LOGIN PASSWORD 'coffee';


CREATE DATABASE coffee OWNER coffee;


psql -U coffee -d coffee


psql -U coffee -d nomDeLaBase -f /var/www/html/Saison09/S09-O-Coffee-JSpsaceW/data/create-database.sql
```