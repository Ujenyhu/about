document.getElementById("year").textContent = new Date().getFullYear();
    
function printResume() {
  var printWindow = window.open('resume.html', '_blank');
  printWindow.onload = function () {
    printWindow.print();
  };
}

function downloadPDF() {
  const downloadIndicator = document.getElementById("download-text");
  const downloadLink = document.getElementById("download-link");
  downloadLink.classList.add("disabled");
  downloadLink.style.pointerEvents = "none"; 
  downloadLink.style.opacity = "0.5"; 
  downloadIndicator.textContent = "Downloading PDF"
  // Get the iframe element
  //var iframe = document.getElementById('pdfFrame');
  // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';

debugger;
 // Remove the iframe and add a new one to force a fresh load
  // var oldIframe = document.getElementById('pdfFrame');
  // if (oldIframe) oldIframe.remove();
  // var newIframe = document.createElement('iframe');
  // newIframe.id = 'pdfFrame';
  // newIframe.style.display = 'none'; // Hide the iframe
  // document.body.appendChild(newIframe);

  const iframe = document.getElementById('pdfFrame') || document.createElement('iframe');
  iframe.id = 'pdfFrame';
  iframe.style.display = 'none';
  
  if (!iframe.parentElement) {
    document.body.appendChild(iframe);
  }

  // Set the iframe source to the resume page
  iframe.src = 'resume.html';

  // Wait for the iframe content to load completely
  iframe.onload = function () {
   //debugger;
   
    // Access the iframe's document
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    //var iframeDocument = newIframe.contentWindow.document;
    
    // Get the body element of the iframe
    var htmlElement = iframeDocument.body;
    
    // Use html2pdf to convert the iframe content to a PDF and save it
    html2pdf().from(htmlElement).save(`Resume- Ujenyuojo Precious Egwuda (Software Developer).pdf`);
    downloadLink.classList.remove("disabled");
    downloadLink.style.pointerEvents = "auto"; 
    downloadLink.style.opacity = "1"; 
    downloadIndicator.textContent = "Download PDF"
  };

  // If the iframe is already loaded, call the onload function directly
  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
   // debugger;
    newIframe.onload();
  }
}
