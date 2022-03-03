function formatSearchText(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function formatText(text: string): RegExp {
  const name = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const regex = new RegExp(`.*${name}.*`, "gi");
  return regex;
}
export { formatSearchText, formatText };
