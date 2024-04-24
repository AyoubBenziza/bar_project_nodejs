const PDFDocument = require("pdfkit");

function createPDF(data) {
  const doc = new PDFDocument();
  doc.on("data", data);
  doc.fontSize(25);
  doc.end();
}

module.exports = { createPDF };
