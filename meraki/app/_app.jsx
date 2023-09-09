import { useEffect } from 'react';
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const inputFields = document.querySelectorAll('input, textarea'); // Selección de todos los campos de entrada

    inputFields.forEach((inputField) => {
      inputField.addEventListener('focus', () => {
        // Ajusta el nivel de escala en el enfoque para evitar el zoom
        document.documentElement.style.setProperty('font-size', '16px'); // Ajusta a la fuente base de 16px
      });

      inputField.addEventListener('blur', () => {
        // Restaura el nivel de escala en la pérdida de enfoque
        document.documentElement.style.removeProperty('font-size');
      });
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;