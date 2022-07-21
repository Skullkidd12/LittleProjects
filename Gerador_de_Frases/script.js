let btn = document.querySelector("#nova-frase");
let frase = document.querySelector(".frase");
let pessoa = document.querySelector(".pessoa");

const BANCO_FRASES = [
  {
    frase:
      "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
    pessoa: "Cynthia Kersey",
  },
  {
    frase:
      "Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.",
    pessoa: "Sigmund Freud",
  },
  {
    frase:
      "Se um homem não descobriu nada pelo qual morreria, não está pronto para viver.",
    pessoa: "Martin Luther King",
  },
  {
    frase: "A alegria evita mil males e prolonga a vida.",
    pessoa: "William Shakespeare",
  },
  {
    frase:
      "A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.",
    pessoa: "Mahatma Gandhi",
  },
  {
    frase:
      "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    pessoa: "Dalai Lama",
  },
  {
    frase:
      "O pessimismo torna os homens cautelosos, enquanto o otimismo torna os homens imprudentes.",
    pessoa: "Confúcio",
  },
  {
    frase: "A sabedoria começa na reflexão.",
    pessoa: "Sócrates",
  },
  {
    frase:
      "O medo é um preconceito dos nervos. E um preconceito, desfaz-se - basta a simples reflexão.",
    pessoa: "Machado de Assis",
  },
  {
    frase: "A persistência é o caminho do êxito.",
    pessoa: "Charles Chaplin",
  },
  {
    frase:
      "É preciso ser um realista para descobrir a realidade. É preciso ser um romântico para criá-la.",
    pessoa: "Fernando Pessoa",
  },
  {
    frase:
      "Em nossas vidas, a mudança é inevitável. A perda é inevitável. A felicidade reside na nossa adaptabilidade em sobreviver a tudo de ruim.",
    pessoa: "Buda",
  },
];

btn.addEventListener("click", rand);

function rand() {
  let random = Math.floor(Math.random() * BANCO_FRASES.length);

  frase.innerText = BANCO_FRASES[random].frase;
  pessoa.innerText = BANCO_FRASES[random].pessoa;
}
