import React from 'react'

const InfoAboutData = () => {
  return (
    <div className='text-lg pt-5'>
      <p>Dane dotyczące postępowań pochodzą z platformy e-Zamówienia będącej własnością Urzędu Zamówień Publicznych. Platforma dostępna jest pod adresem <a href='https://ezamowienia.gov.pl/' rel="noreferrer" target="_blank">https://ezamowienia.gov.pl</a>.</p>
      <p>Odbiór danych odbywa się w formacie JSON za pomocą udostępnionego, niewymagającego używietylnienia API.</p>

      <p className='py-4'>Wszystkie dane na niniejszej stronie mają <strong>wyłącznie charakter poglądowy</strong> i mogą zawierać błądy lub omyłki.</p>
    </div>
  )
}

export default InfoAboutData