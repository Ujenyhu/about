document.getElementById("year").textContent = new Date().getFullYear();
    
function printResume() {
  var printWindow = window.open('resume.html', '_blank');
  printWindow.onload = function () {
    printWindow.print();
  };
}

function downloadPDF() {
  
  // Get the iframe element
  //var iframe = document.getElementById('pdfFrame');
  // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';


 // Remove the iframe and add a new one to force a fresh load
  var oldIframe = document.getElementById('pdfFrame');
  if (oldIframe) oldIframe.remove();

  var newIframe = document.createElement('iframe');
  newIframe.id = 'pdfFrame';
  newIframe.style.display = 'none'; // Hide the iframe
  document.body.appendChild(newIframe);

  // Set the iframe source to the resume page
  newIframe.src = 'resume.html';
  //iframe.src = 'resume.html';

  // Wait for the iframe content to load completely
  newIframe.onload = function () {
   //debugger;
   
    // Access the iframe's document
    //var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var iframeDocument = newIframe.contentWindow.document;
    
    // Get the body element of the iframe
    var htmlElement = iframeDocument.body;
    
    // Use html2pdf to convert the iframe content to a PDF and save it
    html2pdf().from(htmlElement).save(`Resume- Ujenyuojo Precious Egwuda (Software Developer).pdf`);
  };
}
