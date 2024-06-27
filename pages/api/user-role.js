// pages/api/user-role.js
export default function handler(req, res) {
    // Supposons que vous ayez une fonction asynchrone pour obtenir le rôle de l'utilisateur depuis une base de données
    async function fetchUserRole() {
        // Ici, vous écririez la logique pour récupérer le rôle depuis votre base de données
        // Par exemple :
        const userRole = await db.query('SELECT role FROM users WHERE id = ?', [userId]);
        // Pour l'exemple, simuler un rôle récupéré de la base de données :
        //const userRole = 'eleve'; // Remplacez par votre logique réelle
        
        return userRole;
    }

    // Appel de la fonction asynchrone pour récupérer le rôle
    fetchUserRole().then((userRole) => {
        // Une fois que vous avez le rôle, répondez à la requête avec le rôle récupéré
        res.status(200).json({ role: userRole });
    }).catch((error) => {
        // En cas d'erreur, vous pouvez gérer l'erreur ici
        console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération du rôle de l\'utilisateur' });
    });
}
