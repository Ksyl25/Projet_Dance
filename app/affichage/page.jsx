"use client"; // Marque ce fichier comme un composant client

import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CoursForm.module.css';
import { Form } from 'react-hook-form';
import { uploadFile } from './upload.action';
import { put } from '@vercel/blob';



// Options pour les jours de la semaine
const joursOptions = [
    { value: 'lundi', label: 'Lundi' },
    { value: 'mardi', label: 'Mardi' },
    { value: 'mercredi', label: 'Mercredi' },
    { value: 'jeudi', label: 'Jeudi' },
    { value: 'vendredi', label: 'Vendredi' },
    { value: 'samedi', label: 'Samedi' },
    { value: 'dimanche', label: 'Dimanche' },
];

// Options pour les mois de l'année
const moisOptions = [
    { value: 1, label: 'Janvier' },
    { value: 2, label: 'Février' },
    { value: 3, label: 'Mars' },
    { value: 4, label: 'Avril' },
    { value: 5, label: 'Mai' },
    { value: 6, label: 'Juin' },
    { value: 7, label: 'Juillet' },
    { value: 8, label: 'Août' },
    { value: 9, label: 'Septembre' },
    { value: 10, label: 'Octobre' },
    { value: 11, label: 'Novembre' },
    { value: 12, label: 'Décembre' },
];

// Fonction pour générer les dates basées sur la récurrence
const generateDates = (startDate, recurrenceType, options) => {
    switch (recurrenceType) {
        case 'date_unique':
            return startDate ? [startDate.toISOString()] : [];
        case 'jour_specifique_mois':
            const { joursDuMois, mois } = options;
            const dates = [];
            for (const moisNum of mois) {
                for (const jour of joursDuMois) {
                    const date = new Date(startDate.getFullYear(), moisNum - 1, jour);
                    dates.push(date.toISOString());
                }
            }
            return dates;
        case 'jours_semaine':
            return options.joursSemaine;
        default:
            return [];
    }
};

const CoursForm = () => {
    const [formData, setFormData] = useState({
        titre: '',
        type: '',
        heure: '',
        duree: '',
        prix: '',
        formatPaiement: 'payant',
        recurrence: 'date_unique',
        joursSemaine: [],
        mois: [],
        joursDuMois: [],
        dates: null,
        image: null,
    });

    // Gestion des changements dans les champs de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Gestion des changements dans les sélections multiples
    const handleMultiSelectChange = (selectedOptions, actionMeta) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setFormData((prevData) => ({
            ...prevData,
            [actionMeta.name]: values,
        }));
    };

    // Gestion du changement de type de récurrence
    const handleRecurrenceChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            recurrence: value,
        }));

        // Réinitialiser les champs de récurrence lorsque la récurrence est changée
        if (value === 'date_unique') {
            setFormData((prevData) => ({
                ...prevData,
                joursSemaine: [],
                mois: [],
                joursDuMois: [],
            }));
        }
    };

    // Gestion du changement de la date et heure de début
    const handleDateChange = (date) => {
        if (date) {
            setFormData((prevData) => ({
                ...prevData,
                dates: date,
            }));
        }
    };

    // Gestion du changement de l'image
    const handleImageChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));

    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifiez si une image a été sélectionnée


        // Génération des dates des événements
        const dates_evenements = generateDates(
            formData.dates,
            formData.recurrence,
            {
                joursDuMois: formData.joursDuMois,
                mois: formData.mois,
                joursSemaine: formData.joursSemaine
            }
        );

        const formDataToSend = {
            titre: formData.titre,
            type: formData.type,
            heure: formData.heure,
            duree: formData.duree,
            prix: formData.prix,
            formatPaiement: formData.formatPaiement,
            recurrence: formData.recurrence,
            image: formData.image, // Ajoutez l'URL de l'image ici
            dates: dates_evenements,
        }
        console.log(formDataToSend.image)
        //const file = formDataToSend.image;
        //console.log(file);
        //const url = await uploadFile(formData);
        //console.log(url);
        //////////////////////////////
        //const file = formDataToSend.image;/
        /*if (formDataToSend.image) { Console.log(formDataToSend.image); }
        else {
            console.log('marche pas')
        };*/
        const filename = formDataToSend.image.name;
        const blob = await put(filename, formDataToSend.image, {
            access: 'public',
            token: "vercel_blob_rw_gMlTxf8SSwD5Pz1d_3RBj85wmLD9E9gsNHjYKrFk2fxOPwL",
            //token: process.env.BLOB_READ_WRITE_TOKEN,


        });
        console.log(filename);
        console.log(blob.url);
        formDataToSend.image = blob.url;


        try {
            const response = await fetch('/api/creacours', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });

            if (response.ok) {
                alert('Cours créé avec succès');
                setFormData({
                    titre: '',
                    type: '',
                    heure: '',
                    duree: '',
                    prix: '',
                    formatPaiement: 'payant',
                    recurrence: 'date_unique',
                    joursSemaine: [],
                    mois: [],
                    joursDuMois: [],
                    dates: null,
                    image: null,
                });
            } else {
                alert('Erreur lors de la création du cours');
            }
        } catch (error) {
            console.error('Erreur lors de la création du cours:', error);
            alert('Erreur lors de la création du cours');
        }
    };

    return (
        <form className={styles.coursForm} onSubmit={handleSubmit}>
            <div>
                <label>Titre</label>
                <input type="text" name="titre" value={formData.titre} onChange={handleChange} required />
            </div>
            <div>
                <label>Type</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />
            </div>
            <div>
                <label>Date </label>
                <DatePicker
                    selected={formData.dates ? new Date(formData.dates) : null}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionnez une date"
                    className={styles.customDatePicker}
                    calendarClassName={styles.customCalendar}
                />

            </div>
            <div>
                <label>Heure</label>
                <input type="time" name="heure" value={formData.heure} onChange={handleChange} required />
            </div>
            <div>
                <label>Durée (en minutes)</label>
                <input type="number" name="duree" value={formData.duree} onChange={handleChange} required />
            </div>
            <div>
                <label>Prix</label>
                <input type="number" name="prix" value={formData.prix} onChange={handleChange} required />
            </div>
            <div>
                <label>Format de Paiement</label>
                <select name="formatPaiement" value={formData.formatPaiement} onChange={handleChange}>
                    <option value="gratuit">Gratuit pour abonnés ou avec carte</option>
                    <option value="payant">Payant pour tout le monde</option>
                </select>
            </div>
            <div>
                <label>Récurrence</label>
                <select name="recurrence" value={formData.recurrence} onChange={handleRecurrenceChange}>
                    <option value="date_unique">Date unique</option>
                    <option value="jour_specifique_mois">Un jour spécifique au mois</option>
                    <option value="jours_semaine">Jours de la semaine</option>
                </select>
            </div>
            {formData.recurrence === 'jour_specifique_mois' && (
                <>
                    <div>
                        <label>Mois</label>
                        <Select
                            name="mois"
                            options={moisOptions}
                            isMulti
                            onChange={handleMultiSelectChange}
                            value={moisOptions.filter(option => formData.mois.includes(option.value))}
                        />
                    </div>
                    <div>
                        <label>Jours du Mois</label>
                        <Select
                            name="joursDuMois"
                            options={Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }))}
                            isMulti
                            onChange={handleMultiSelectChange}
                            value={formData.joursDuMois.map(day => ({ value: day, label: `${day}` }))}
                        />
                    </div>
                </>
            )}
            {formData.recurrence === 'jours_semaine' && (
                <>
                    <div>
                        <label>Jours de la Semaine</label>
                        <Select
                            name="joursSemaine"
                            options={joursOptions}
                            isMulti
                            onChange={handleMultiSelectChange}
                            value={joursOptions.filter(option => formData.joursSemaine.includes(option.value))}
                        />
                    </div>
                </>
            )}
            <div>
                <label>Image</label>
                <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <button type="submit">Créer le cours</button>
        </form>

    );
};

export default CoursForm;
