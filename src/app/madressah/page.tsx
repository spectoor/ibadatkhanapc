"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import {helloAssoUrl, madressahTimes} from "@/lib/config";
import Script from 'next/script';

export default function MadressahPage() {
  const [formData, setFormData] = useState({
    nomEnfant: "",
    prenomEnfant: "",
    age: "",
    nomParent: "",
    prenomParent: "",
    email: "",
    telephone: "",
    adresse: "",
    niveau: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fonction pour calculer l'année académique basée sur le 31 juillet
  const getAcademicYear = (): string => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11 (0 = janvier, 6 = juillet)
    const currentDay = now.getDate();

    // Si on est en août ou après (mois >= 7), ou si on est le 1er août ou après
    if (currentMonth > 6 || (currentMonth === 6 && currentDay >= 1)) {
      return `${currentYear}/${currentYear + 1}`;
    } else {
      return `${currentYear - 1}/${currentYear}`;
    }
  };

  // Fonction pour capitaliser la première lettre de chaque mot
  const capitalize = (text: string): string => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Fonction pour générer le PDF
  const generatePDF = async () => {
    const academicYear = getAcademicYear();
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    try {
      let currentY = 20;

      // ---- Titre ----
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(16);
      doc.text(`Fiche de renseignement de la rentrée ${academicYear}`, 105, currentY, { align: "center" });

      currentY += 10;
      doc.setFontSize(12);
      doc.setFont("Helvetica", "bold");

      // ---- Message ----
      doc.text(`Chers parents, Assalamou alaykoum,`, 10, currentY);

      currentY += 7;
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(11);

      const text1 = `Une nouvelle année débute et c'est avec un grand plaisir, par la grâce d'Allah, que nous accueillons vos enfants.`;
      const splitText1 = doc.splitTextToSize(text1, 190);
      doc.text(splitText1, 10, currentY);
      currentY += splitText1.length * 4.5;

      currentY += 2;
      const text2 = `Comme l'année dernière, nous organiserons une rencontre avec les parents afin de lancer cette nouvelle année scolaire. Lors de cette réunion, nous rappellerons le règlement intérieur, présenterons le déroulement de l'année et répondrons à l'ensemble de vos questions.`;
      const splitText2 = doc.splitTextToSize(text2, 190);
      doc.text(splitText2, 10, currentY);
      currentY += splitText2.length * 4.5;

      currentY += 2;
      const text3 = `À cette occasion, nous récupérerons les fiches de renseignements pour les nouveaux élèves, ainsi qu'une première partie de la cotisation, d'un montant de 30 € par famille. La date de la réunion vous sera communiquée très prochainement et votre présence est donc vivement recommandée. Djazak'Allah kheyr.`;
      const splitText3 = doc.splitTextToSize(text3, 190);
      doc.text(splitText3, 10, currentY);
      currentY += splitText3.length * 4.5;

      currentY += 2;
      const text4 = `Enfin, afin de mettre à jour les informations concernant les élèves de la Madressah de Plateau Caillou, nous vous remercions de bien vouloir remplir le formulaire suivant :`;
      const splitText4 = doc.splitTextToSize(text4, 190);
      doc.text(splitText4, 10, currentY);
      currentY += splitText4.length * 4.5;

      currentY += 6;
      const startY = currentY;

      // ===== Bloc unique avec tous les champs =====
      doc.setFontSize(11);
      doc.setFont("Helvetica", "bold");

      // Contour du bloc unique
      const blocHeight = 68;
      doc.rect(10, startY, 190, blocHeight);

      // Deux colonnes
      const leftX = 12;
      const rightX = 110;
      let lineY = startY + 8;

      // Ligne 1 : Nom et Prénom de l'élève
      doc.text("Nom de l'élève :", leftX, lineY);
      doc.line(leftX + 31, lineY + 1, 100, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(formData.nomEnfant.toUpperCase(), leftX + 32, lineY);
      doc.setFont("Helvetica", "bold");

      doc.text("Prénom de l'élève :", rightX, lineY);
      doc.line(rightX + 37, lineY + 1, 198, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(capitalize(formData.prenomEnfant), rightX + 38, lineY);
      doc.setFont("Helvetica", "bold");

      // Ligne 2 : Âge
      lineY += 10;
      doc.text("Âge de l'élève :", leftX, lineY);
      doc.line(leftX + 30, lineY + 1, 60, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text( `${formData.age} ans`, leftX + 31, lineY);
      doc.setFont("Helvetica", "bold");

      // Ligne 3 : Nom et Prénom du parent
      lineY += 12;
      doc.text("Nom du parent :", leftX, lineY);
      doc.line(leftX + 32, lineY + 1, 100, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(formData.nomParent.toUpperCase(), leftX + 33, lineY);
      doc.setFont("Helvetica", "bold");

      doc.text("Prénom du parent :", rightX, lineY);
      doc.line(rightX + 37, lineY + 1, 198, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(capitalize(formData.prenomParent), rightX + 38, lineY);
      doc.setFont("Helvetica", "bold");

      // Ligne 4 : Téléphone et Email
      lineY += 10;
      doc.text("N° de téléphone portable :", leftX, lineY);
      doc.line(leftX + 50, lineY + 1, 100, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(formData.telephone, leftX + 51, lineY);
      doc.setFont("Helvetica", "bold");

      doc.text("Email :", rightX, lineY);
      doc.line(rightX + 14, lineY + 1, 198, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(formData.email, rightX + 15, lineY);
      doc.setFont("Helvetica", "bold");

      // Ligne 5 : Adresse (première ligne - rue/numéro)
      lineY += 10;
      doc.text("Adresse :", leftX, lineY);
      doc.line(leftX + 19, lineY + 1, 198, lineY + 1);
      doc.setFont("Helvetica", "normal");

      // Diviser l'adresse sur le code postal (5 chiffres)
      const postalCodeMatch = formData.adresse.match(/\b\d{5}\b/);
      let addressLine1 = formData.adresse;
      let addressLine2 = "";

      if (postalCodeMatch) {
        const postalCodeIndex = postalCodeMatch.index || 0;
        addressLine1 = formData.adresse.substring(0, postalCodeIndex).trim();
        addressLine2 = formData.adresse.substring(postalCodeIndex).trim();
      }

      doc.text(addressLine1, leftX + 20, lineY);
      doc.setFont("Helvetica", "bold");

      // Ligne 6 : Deuxième ligne pour l'adresse (code postal + ville)
      lineY += 8;
      doc.line(leftX, lineY + 1, 198, lineY + 1);
      doc.setFont("Helvetica", "normal");
      doc.text(addressLine2.toUpperCase(), leftX, lineY);
      doc.setFont("Helvetica", "bold");

      // ===== Texte final =====
      let finalY = startY + blocHeight + 8;

      doc.setFontSize(11);
      doc.setFont("Helvetica", "normal");
      const cotisationText = doc.splitTextToSize(
        "La cotisation par élève est de 10€ par mois et 100€ pour l'année, je vous rappelle que cette cotisation participe au fonctionnement de la Madressah et aussi de l'Ibadat Khana.",
        190
      );
      doc.text(cotisationText, 10, finalY);
      finalY += cotisationText.length * 4.5;

      // Signature
      finalY += 8;
      doc.setFont("Helvetica", "bold");
      doc.text("Le Bureau, AMSPC", 200, finalY, { align: 'right' });


      // Télécharger le PDF
      doc.save(`Inscription_Madressah_${formData.nomEnfant}_${formData.prenomEnfant}_${academicYear.replace("/", "-")}.pdf`);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);

    // Générer et télécharger le PDF
    generatePDF();
  };

  // Structured Data pour la Madressah
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://ibadatkhanapc.fr/madressah#organization",
    "name": "Madressah de Plateau Caillou",
    "alternateName": "École Coranique Noor-e-Habibia",
    "url": "https://ibadatkhanapc.fr/madressah",
    "description": "École coranique pour l'enseignement du Coran, Tajwid, Hifz, Aqida, Fiqh et histoire islamique",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plateau Caillou",
      "addressLocality": "Saint-Paul",
      "addressRegion": "La Réunion",
      "postalCode": "97460",
      "addressCountry": "FR"
    },
    "image": "https://ibadatkhanapc.fr/madressah.jpg",
    "offers": {
      "@type": "Offer",
      "category": "Enseignement religieux",
      "description": "Cours de Coran, Tajwid, Hifz, Aqida, Fiqh pour enfants et adolescents"
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-madressah"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-deep-green/90 via-deep-green/85 to-deep-green/90 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              La <span className="text-gold">Madressah</span><br/>de Plateau Caillou
            </h1>

            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Pour les enfants et adolescents
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* L'enseignement */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">
          L&apos;enseignement
        </h2>
        <div className="prose prose-lg max-w-none text-darkGray/80">
          <p className="text-lg leading-relaxed mb-4">
            Notre Madressah offre un enseignement religieux de qualité aux enfants et adolescents de la communauté. Les cours sont dispensés dans le respect des traditions de l&apos;Islam sunnite.
            À travers un cadre bienveillant et structuré, la Madressah de Plateau Caillou est un lieu où les enfants et adolescents peuvent grandir dans leur foi, acquérir des connaissances religieuses profondes et s’intégrer harmonieusement dans leur communauté.
          </p>
          <div className="bg-lightGray rounded-lg pt-8">
            <h3 className="text-xl font-semibold text-gold mb-4">Programme d&apos;enseignement</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Apprentissage de la lecture du Coran (Tajwid)</li>
              <li>Mémorisation du Coran (Hifz)</li>
              <li>Bases de la foi islamique (Aqida)</li>
              <li>Pratiques religieuses (Fiqh)</li>
              <li>Histoire islamique</li>
              <li>Éthique et comportement (Akhlaq)</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* L'imam */}
      <section className="pt-8 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">
          L&apos;Imam - Mw Ahmad Mamode
        </h2>
        <div className="text-darkGray/80">
          <p className="text-lg leading-relaxed mb-4">
            Nous avons l’honneur de vous présenter notre enseignant et Imam, un homme dont les valeurs et le parcours témoignent de son engagement profond dans l’enseignement et la transmission du savoir islamique.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Notre enseignant a complété son Hifz à la Madressah Tanwirous Sibyâne de Saint-Paul en 2005 à l'âge de 15 ans. Après l'obtention de son bac ES en 2008, il a choisi de partir en Inde où il a étudié dans une institution prestigieuse, notamment à l'Université islamique de Falahé Daarain à Tadkeshwar, dans l'État du Gujarat en Inde, où il a approfondi ses connaissances en sciences islamiques de 2008 à 2014, en particulier dans les domaines du Qour'aan (Tadjweed et Qiraat), du Tafseer, des Ahaadiths, de la jurisprudence (Fiqh) et de la langue arabe et ourdou. Cette formation lui a permis de recevoir une éducation rigoureuse et de développer une expertise dans son domaine.
            Il a commencé sa mission à Plateau Caillou le 1er octobre 2015 en tant qu'enseignant et imam.
            Il a poursuivi et terminé parallèlement ses études à Riyadhoul Ouloum à Saint-Pierre de 2015 à 2017, où il a continué à affiner son savoir et sa compréhension des enseignements islamiques et des grands recueils de Ahaadiths (Boukhari, Mouslim…). Il fut en 2018 le premier diplômé de cet institut qui a ouvert ses portes en 2014 à Saint-Pierre.
          </p>
          <p className="text-lg leading-relaxed">
            Mw Ahmad Mamode a également complété son cursus de Qiraat Sab'ah (7 variantes de lecture du Qour'aan) en 2022.
            Fort de ces expériences, notre enseignant est un véritable atout pour notre communauté. Son dévouement à l'enseignement et sa capacité à transmettre les principes fondamentaux de notre foi avec sagesse et clarté font de lui un modèle pour nos élèves. Nous sommes heureux de l'avoir parmi nous pour guider nos jeunes générations sur le chemin du savoir et de la vertu.
            Qu'Allah lui accorde longévité, sincérité, humilité, constance et succès dans sa noble mission ! Amine !
          </p>
        </div>
        </div>
      </section>

      {/* Les horaires */}
      <section className="pt-8 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">
          Les horaires
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gold/10 rounded-lg p-6 border-l-4 border-gold">
            <h3 className="text-xl font-semibold text-darkGray mb-3">Cours réguliers</h3>
            <div className="text-darkGray/80 space-y-2">
              {
                madressahTimes.map(element => (<p key={element.days}><strong>{element.days}</strong>&nbsp;:&nbsp;{element.time}</p>))
              }
            </div>
          </div>
          <div className="bg-lightGray rounded-lg p-6">
            <h3 className="text-xl font-semibold text-darkGray mb-3">Cours vacances scolaires</h3>
            <div className="text-darkGray/80 space-y-2">
              <p>Veuillez nous contacter pour confirmation.</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-darkGray/60 mt-4">
          * Les horaires peuvent être modifiés. Veuillez nous contacter pour confirmation.
        </p>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">
          Formulaire d&apos;inscription
        </h2>

        {/* Bloc liste d'attente */}
        <div className="max-w-3xl mx-auto mb-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-amber-800">Inscription sur liste d&apos;attente</h3>
              <p className="text-amber-700 mt-1">
                En raison du nombre important d&apos;enfants déjà inscrits, les nouvelles inscriptions sont actuellement enregistrées sur <strong>liste d&apos;attente</strong>. Vous serez contacté(e) dès qu&apos;une place se libère, incha&apos;Allah. Veuillez remplir le formulaire ci-dessous, l&apos;imprimer et le remettre directement à l&apos;Imam Mw Ahmad Mamode.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomEnfant" className="block text-sm font-medium text-darkGray mb-2">
                  Nom de l&apos;enfant *
                </label>
                <input
                  type="text"
                  id="nomEnfant"
                  name="nomEnfant"
                  value={formData.nomEnfant}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="prenomEnfant" className="block text-sm font-medium text-darkGray mb-2">
                  Prénom de l&apos;enfant *
                </label>
                <input
                  type="text"
                  id="prenomEnfant"
                  name="prenomEnfant"
                  value={formData.prenomEnfant}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-darkGray mb-2">
                  Âge *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomParent" className="block text-sm font-medium text-darkGray mb-2">
                  Nom du parent/tuteur *
                </label>
                <input
                  type="text"
                  id="nomParent"
                  name="nomParent"
                  value={formData.nomParent}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="prenomParent" className="block text-sm font-medium text-darkGray mb-2">
                  Prénom du parent/tuteur *
                </label>
                <input
                  type="text"
                  id="prenomParent"
                  name="prenomParent"
                  value={formData.prenomParent}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-darkGray mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-darkGray mb-2">
                Adresse *
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">
                T&eacute;l&eacute;charger le formulaire
              </Button>
            </div>
          </form>
        </div>
        </div>
      </section>

      {/* Parrainage */}
      <section className="text-center py-24 bg-gold/10">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
          Parrainage pour les élèves
        </h2>
        <p className="text-lg text-darkGray/80 mb-6 max-w-2xl mx-auto">
          Vous souhaitez aider les élèves de la Madressah ?<br/>Vous pouvez parrainer un
          enfant pour lui permettre de suivre les cours.
        </p>
        <Button aschild={true} size="lg">
          <Link
            href={helloAssoUrl + '/formulaires/3'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Parrainer un élève
          </Link>
        </Button>
        </div>
      </section>
    </div>
  );
}
