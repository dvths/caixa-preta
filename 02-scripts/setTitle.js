function setTitle(title) {
  let suffix = ""
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedDateTime = day + month + year + hours + minutes + seconds;

  if (title != null) {
    // Substitui os caracteres especiais e os espaços por um "-"
    suffix = title.replace(/[^\w\^a-zA-ZÀ-ÖØ-öø-ÿÇç0-9-]/g, " ").replace(/\s+/g, "-").toLowerCase();
  } else {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charLenght = characters.length;

    for (let i = 1; i < 4; i++) {
      suffix += characters.charAt(Math.floor(Math.random() * charLenght));
    }
    return formattedDateTime + "-" + suffix
  }


  return formattedDateTime + "-" + suffix;
}

module.exports = setTitle;
