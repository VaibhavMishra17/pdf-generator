$(document).ready(function () {
  window.jsPDF = window.jspdf.jsPDF;

  $("#generate").click(function () {
    var text = $("#text").val();
    const doc = new jsPDF();

    doc.text(text, 10, 10);
    doc.save("generated.pdf");
  });
});
