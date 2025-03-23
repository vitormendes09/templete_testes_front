const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser: import('playwright').Browser, page: import('playwright').Page;

Given("que o usuário preencheu todos os campos obrigatórios corretamente", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/register");

  await page.fill('input[placeholder="Nome"]', "João");
  await page.fill('input[placeholder="Sobrenome"]', "Silva");
  await page.fill('input[placeholder="E-mail"]', "joao@example.com");
  await page.fill('input[placeholder="Senha"]', "senhaSegura123");
  await page.fill('input[placeholder="Dia"]', "01");
  await page.fill('input[placeholder="Mês"]', "01");
  await page.fill('input[placeholder="Ano"]', "1990");
});

When("o usuário submete o formulário de registro", async function () {
  await page.click('button:has-text("Registrar")');
});

When("o usuário clica no botão de registrar", async function () {
  await page.click('button:has-text("Registrar")');
});

Then("o usuário deve ver uma mensagem de sucesso", async function () {
  await page.waitForSelector('text=Registro realizado com sucesso');
  await browser.close();
});

Given("que o usuário preencheu todos os campos, exceto o e-mail corretamente", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/register");

  await page.fill('input[placeholder="Nome"]', "João");
  await page.fill('input[placeholder="Sobrenome"]', "Silva");
  await page.fill('input[placeholder="E-mail"]', "email-invalido");
  await page.fill('input[placeholder="Senha"]', "senhaSegura123");
  await page.fill('input[placeholder="Dia"]', "01");
  await page.fill('input[placeholder="Mês"]', "01");
  await page.fill('input[placeholder="Ano"]', "1990");
});

Then("o usuário deve ver uma mensagem de erro indicando e-mail inválido", async function () {
  await page.waitForSelector('text=E-mail inválido');
  await browser.close();
});
