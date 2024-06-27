import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';


const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    console.log('Données reçues :', body);


    if (req.method !== 'POST') {
        //return res.status(405).json({ error: 'Method not allowed' });
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
        });
    }

    try {
        /* const {
             titre,
             type,
             heure,
             duree,
             prix,
             formatPaiement,
             recurrence,
             image,
             dates,
         } = body;*/

        // Validation des données
        /*if (!titre || !type || !prix) {
            console.log('ya rien ');
            //return res.status(400).json({ error: 'Missing required fields' });
            return new Response(JSON.stringify({ message: 'Missing required fields' }), {
                status: 400,
            });
        }*/

        // Convertir dateHeureDebut en objet Date valide
        /*const date = new Date(dateHeureDebut);
        if (isNaN(date.getTime())) {
            return res.status(400).json({ error: 'Invalid date format' });
        }*/
        /*let imagename = null;
        if (body.image) {
            const { name, size, type } = body.image
            imagename = name;
        }*/

        const cours = await prisma.cours.create({
            /*data: {
                titre,
                type,
                heure,
                duree: parseInt(duree, 10),
                prix: parseFloat(prix),
                formatPaiement,
                recurrence,
                image,
                dates,
            },*/
            data: {
                titre: body.titre,
                type: body.type,
                heure: body.heure,
                duree: parseInt(body.duree),
                prix: parseInt(body.prix),
                format_paiement: body.formatPaiement,
                recurrence: body.recurrence,
                image: body.image,
                dates: body.dates,
            },

        });

        //res.status(201).json(cours);
        return new Response(JSON.stringify({ message: 'cours creer succes' }), {
            status: 201,
        });


    } catch (error) {
        console.error(error);
        //res.status(500).json({ error: 'An error occurred while creating the course' });
        return new Response(JSON.stringify({ message: 'An error occurred while creating the course' }), {
            status: 500,
        });
    }
}
