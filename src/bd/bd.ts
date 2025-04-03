import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Configuration de dotenv
dotenv.config();

// Connexion à la base de données
const sequelize = new Sequelize(
    process.env.DB_NAME!,  // Nom de la base de données
    process.env.DB_USER!,  // Nom d'utilisateur
    process.env.DB_PASS!,  // Mot de passe
    {
        host: process.env.DB_HOST,  // Hôte de la base de données
        dialect: "postgres",  // Changer de 'mysql' à 'postgres'
        port: Number(process.env.DB_PORT),  // Port (par défaut 5432 pour PostgreSQL)
        logging: false,  // Désactiver les logs SQL
        dialectOptions: {
            ssl: {
                require: true, // Nécessite SSL
                rejectUnauthorized: false, // Rejette les connexions non autorisées
            },
        },
    }
);


// Test de la connexion
sequelize.authenticate().then(() => {
    console.log("Connexion établie avec la base de données");
}).catch((error) => {
    console.log("Erreur de connexion avec la base de données", error);
});

export default sequelize;
