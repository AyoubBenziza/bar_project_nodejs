const PDFDocument = require("pdfkit");

// Générateur de fichier PDF
function createPDF(dataCallback, endCallback, data) {
  const commande = data;
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  // Variable de position y(vertical) dans le fichier
  let y = 65;

  // HR
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();

  // Ecriture des données
  for (let property in commande) {
    doc.fontSize(18).text(`${property}: ${commande[property]}`);
    y += 22;
  }

  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();

  // Fin d'écriture du fichier
  doc.end();
}

module.exports = { createPDF };
