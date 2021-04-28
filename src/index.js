const Express = require("express");

const app = Express();

/**
 * An example of "server side" rendering
 */
app.get("/ssr", (_, res) => {
  const text = "Hello World";
  res.end(`<h1>${text}</h1>`);
});

/**
 * An example of "client side" rendering
 */
app.get("/csr", (_, res) => {
  res.end(
    `<h1 id="app"></h1>
    <script>
      const text = document.createTextNode("Hello World"); 
      document.getElementById("app").appendChild(text)
    </script>`
  );
});

app.listen(8090);
//comment
