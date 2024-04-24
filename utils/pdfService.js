const PDFDocument = require("pdfkit");

function createPDF(dataCallback, endCallback, data) {
  const commande = data;
  console.log(`Commande:`, commande);
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  let y = 65;
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
  for (let property in commande) {
    doc.fontSize(18).text(`${property}: ${commande[property]}`);
    console.log(`${commande[property]}`);
    y += 22;
  }
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
  doc.end();
}

module.exports = { createPDF };
