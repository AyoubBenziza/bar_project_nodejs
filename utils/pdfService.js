// Imports
const PDFDocument = require("pdfkit");

// Générateur de fichier PDF
const createCommandePDF = (dataCallback, endCallback, data) => {
  const commande = data;
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  // Ecriture des données

  // Commande
  doc.fontSize(25).text(`Commande ${commande.name}`);
  doc.moveDown();
  doc.fontSize(16).text(`Id: ${commande.id}`);
  doc.fontSize(16).text(`Price: ${commande.price}€`);
  doc.fontSize(16).text(`Date: ${commande.date}`);
  doc.fontSize(16).text(`Créé le: ${commande.createdAt}`);
  doc.fontSize(16).text(`Modifié le: ${commande.updatedAt}`);
  doc.fontSize(16).text(`BarId: ${commande.BarId}`);
  doc.moveDown();

  // Liste des bières
  doc.fontSize(25).text("Liste des bières");
  console.log(`Bieres`, commande.Bieres);
  for (const element of commande.Bieres) {
    doc.moveDown();
    doc.fontSize(22).text(element.name);
    doc.moveDown();
    doc.fontSize(16).text(`Id: ${element.id}`);
    doc.fontSize(16).text(`Degree: ${element.degree}`);
    doc.fontSize(16).text(`Price: ${element.price}€`);
    doc.fontSize(16).text(`BarId: ${element.BarId}`);
  }

  // Fin d'écriture du fichier
  doc.end();
};

// Exports
module.exports = { createCommandePDF };
