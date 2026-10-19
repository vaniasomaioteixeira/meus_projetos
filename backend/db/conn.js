import mysql from 'mysql2/promise'; // <-- 1. Mude para /promise

const db = mysql.createPool({       // <-- 2. Use createPool em vez de createConnection
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste opcional de conexão inicial (com pools em promise, podemos usar o getConnection)
try {
    const connection = await db.getConnection();
    console.log('Conectado ao banco de dados MySQL com sucesso!');
    connection.release();
} catch (err) {
    console.error('Erro ao conectar ao MySQL:', err);
}

export default db;