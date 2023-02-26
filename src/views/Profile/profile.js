
<html>
  <head>
    <title>DaisyJS Example</title>
    <script src="https://unpkg.com/daisyjs"></script>
  </head>
  <body>
    <div id="daisy-container"></div>
    <script>
      const container = document.getElementById('daisy-container');
      const daisyInstance = daisy.create(container);

      const text = daisy.text("Name: ")
        .bold("Mark").text("  Status: ")
        .italic("Trainee").text("  Email: ")
        .underline("mark@gmail.com");

      daisyInstance.render(text);
    </script>
  </body>
</html>