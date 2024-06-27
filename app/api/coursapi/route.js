// app/api/cours/route.js

import Courses from '@/app/courses/Courses';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    // Calculer la date actuelle
    console.log('arrivee');
    const currentDate = new Date();

    // Calculer la date dans 6 jours à partir de la date actuelle
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 60);

    try {
        // Récupérer tous les cours de la base de données
        const allCourses = await prisma.cours.findMany();

        // Afficher tous les cours pour debug
        console.log('Tous les cours:', allCourses);

        // Filtrer les cours selon les conditions spécifiées
        const filteredCourses = allCourses.filter(course => {
            // Vérifier si la récurrence du cours est 'jours semaine'
            if (course.recurrence === 'jours_semaine') {
                console.log(`Cours avec récurrence 'jours semaine' trouvé:`, course);
                return true;  // Inclure directement les cours récurrents
            }

            // Vérifier si course.dates est une chaîne JSON valide
            let courseDates = JSON.stringify(course.dates);
            console.log("icicicicic", courseDates);
            /*try {
                courseDates = JSON.parse(course.dates);
            } catch (error) {
                console.error(`Erreur de parsing JSON pour le cours avec ID ${course.id}:`, error);
                return false;  // Ignorer ce cours s'il y a une erreur de parsing JSON
            }*/

            // Afficher les dates du cours pour debug
            console.log(`Dates du cours avec ID ${course.id}:`, courseDates);

            // Vérifier si l'une des dates du cours est entre la date actuelle et la date dans 6 jours
            /*const isWithinNextSixDays = courseDates.some(dateStr => {
                const date = new Date(dateStr);
                return currentDate <= date && date <= futureDate;
            });*/
            const date = new Date(courseDates);

            if (currentDate <= date && date <= futureDate) {
                console.log(`Cours avec ID ${course.id} est dans les 6 prochains jours.`);
            } else {
                console.log(`Cours avec ID ${course.id} n'est pas dans les 6 prochains jours.`);
            }


            /*if (isWithinNextSixDays) {
                console.log(`Cours avec ID ${course.id} est dans les 6 prochains jours.`);
            } else {
                console.log(`Cours avec ID ${course.id} n'est pas dans les 6 prochains jours.`);
            }*/
            const isWithinNextSixDays = currentDate <= date && date >= futureDate;

            console.log(currentDate);
            console.log(futureDate);


            return isWithinNextSixDays;
        });

        // Retourner les cours filtrés avec un statut HTTP 200 (succès)
        return new NextResponse(JSON.stringify(filteredCourses), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // En cas d'erreur, afficher l'erreur dans la console
        console.error('Erreur lors de la récupération des cours:', error);

        // Retourner une réponse d'erreur avec un statut HTTP 500 (erreur serveur)
        return new NextResponse(JSON.stringify({ message: 'Erreur lors de la récupération des cours' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
