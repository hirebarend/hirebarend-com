(async () => {
  const emailAddress = 'hirebarend@gmail.com';

  const html = await fetch('http://localhost:3000/templates/resume.html');

  const response = await fetch('http://localhost:8080/api/pdf?async=false', {
    body: JSON.stringify({
      blobName: `resume.pdf`,
      html: await html.text(),
      options: {
        // displayHeaderFooter: true,
        isplayHeaderFooter: false,
        // footerTemplate: `<div style="font-size: 8px; text-align: center; width: 100%;"><i>The content of this document is confidential and intended for ${emailAddress} only.</i></div>`,
        footerTemplate: '',
        headerTemplate: '',
        margin: {
          bottom: 50,
          left: 0,
          right: 0,
          top: 0,
        },
        printBackground: true,
      },
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  });

  console.log(await response.json());
})();
