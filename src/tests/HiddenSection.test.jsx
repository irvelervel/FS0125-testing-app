// questo file servirà ad effettuare dei test automatizzati sul componente
// "HiddenSection"

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// to-do list per i nostri test
// - il bottone si monti correttamente nel DOM (che ci sia nella pagina)
// - il bottone avrà etichetta "MOSTRA ORFISSO"

// con describe creo una SERIE di TEST accomunati da un titolo
describe('Button testing', () => {
  // ora creo i singoli test
  // testo che il bottone si monti correttamente nel DOM
  it('mounts correctly the button', () => {
    // dopo aver scritto il titolo, ora descrivo il test
    // per ogni test ci sono 4 steps:
    // 1) montaggio del componente nel virtual DOM
    render(<HiddenSection />)
    // 2) ricerca dell'elemento
    const button = screen.getByRole('button') // così cerco un bottone nella pagina
    // screen rappresenta il VIRTUAL DOM; su di esso cercheremo gli elementi
    // montati con il metodo "render"
    // 3) interazione con l'elemento (se necessaria)
    // nel nostro caso non dobbiamo farci niente con questo bottone
    // 4) verifica delle aspettative
    expect(button).toBeTruthy()
  })
})
