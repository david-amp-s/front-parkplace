   export const lowerFirst = (texto: string) =>
  texto.charAt(0).toLowerCase() + texto.slice(1);

    export const formatText= (texto: string) => {
  return texto.replace(/\s+/g, '');
}