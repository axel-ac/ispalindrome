const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text.length == 0) {
    alert("Input cannot be empty");
    return;
  }
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //   console.log(cleanText)

  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

  const message = isPalindrome
    ? `<span>Yes.</span> It's a palindrome!`
    : `<span>Nope.</span> Not a palindrome!`;
    result.innerHTML = message
    result.classList.remove("error", "success")
    setTimeout(() => {
      result.classList.add(isPalindrome ? "success" : "error");
    }, 10);
});

//!
// const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// Bu satır, text değişkenindeki metindeki tüm karakterleri düzenli ifadelerle belirtilen desene uyan karakterlerle değiştirir ve sonucu cleanText değişkenine atar.
// Düzenli ifade /[^a-zA-Z0-9]/g şu şekilde açıklanabilir:
// /: Düzenli ifadenin başlangıcını ve sonunu belirtir.
// [^a-zA-Z0-9]: Köşeli parantezler içinde yer alan ^ işareti, içerideki karakterlerin dışındaki karakterleri temsil eder. Burada, a-z arasındaki tüm küçük harfler, A-Z arasındaki tüm büyük harfler ve 0-9 arasındaki tüm rakamlar dışındaki karakterler desene uyan karakterleri ifade eder.
// g: Desenin metin içindeki tüm eşleşmelerini bulmak için küresel (global) arama modunu belirtir.
// Bu düzenli ifade, metindeki yalnızca harfler (büyük ve küçük) ve rakamların kalmasını sağlar. Yani, metindeki noktalama işaretleri, boşluklar ve diğer özel karakterler bu desenle eşleştiği için çıkarılır.
// "Hello, World!"  "helloworld"

//!
// const isPalindrome = cleanText === cleanText.split("").reverse("").join("");
// Bu satır, cleanText değişkeninin bir palindrom olup olmadığını kontrol etmek için kullanılır.
// İşlem adımları şu şekildedir:
// cleanText değişkeni, önceki satırdaki işlemlerle elde edilen temizlenmiş bir metin (yalnızca harfler ve rakamlar) içermelidir.
// cleanText.split("") ifadesi, cleanText metnini karakter dizisine (string) dönüştürür ve her bir karakteri bir diziye yerleştirir. Bu şekilde, metin karakter dizisi elemanlarına ayrılır.
// Örneğin, eğer cleanText değeri "helloworld" ise, cleanText.split("") ifadesi şu diziyi elde eder: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"].
// .reverse() metodu, elde edilen dizi öğelerini ters çevirir. Yani, dizinin sırasını tersine çevirir.
// Yukarıdaki örnekte, cleanText.split("").reverse() ifadesi şu diziyi verir: ["d", "l", "r", "o", "w", "o", "l", "l", "e", "h"].
// .join("") metodu, dizi öğelerini birleştirerek tekrar bir karakter dizisi (string) oluşturur. Bu işlemde, dizi öğeleri arasına herhangi bir ayracı eklemek yerine, boş bir dize kullanılır.
// Yukarıdaki örnekte, cleanText.split("").reverse("").join("") ifadesi "dlrowolleh" şeklinde bir karakter dizisi döndürür.
// Son olarak, cleanText ile elde edilen ters çevrilmiş ve birleştirilmiş metin karşılaştırılır (cleanText === cleanText.split("").reverse("").join("")). Eğer bu karşılaştırma eşitlik sağlarsa, metin bir palindromdur.