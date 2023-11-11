<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zwierzaki</title>
</head>
<body>

  <script>
    // Definicja obiektu Zwierzak
    function Zwierzak(imie, gatunek, kolor, wiek, waga, rodzaj) {
      this.imie = imie;
      this.gatunek = gatunek;
      this.kolor = kolor;
      this.wiek = wiek;
      this.waga = waga;
      this.rodzaj = rodzaj;
    }

    // Tworzenie instancji obiektu Zwierzak
    var zwierzak1 = new Zwierzak("Burek", "Pies", "Brązowy", 3, 10, "Domowy");
    var zwierzak2 = new Zwierzak("Mruczek", "Kot", "Czarny", 2, 5, "Domowy");
    var zwierzak3 = new Zwierzak("Rex", "Pies", "Biały", 4, 15, "Domowy");
    var zwierzak4 = new Zwierzak("Whiskers", "Kot", "Szary", 1, 4, "Domowy");
    var zwierzak5 = new Zwierzak("Fiona", "Chomik", "Złoty", 0.5, 0.2, "Domowy");
    var zwierzak6 = new Zwierzak("Charlie", "Królik", "Brązowy", 2, 2.5, "Domowy");

    // Wypisanie atrybutów na konsoli
    console.log("Zwierzak 1:", zwierzak1);
    console.log("Zwierzak 2:", zwierzak2);
    console.log("Zwierzak 3:", zwierzak3);
    console.log("Zwierzak 4:", zwierzak4);
    console.log("Zwierzak 5:", zwierzak5);
    console.log("Zwierzak 6:", zwierzak6);
  </script>

</body>
</html>
