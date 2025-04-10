// questo file servirà ad effettuare dei test automatizzati sul componente
// "HiddenSection"

import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// to-do list per i nostri test
// - il bottone si monti correttamente nel DOM (che ci sia nella pagina)
// - il bottone avrà etichetta "MOSTRA ORFISSO"

// con describe creo una SERIE di TEST accomunati da un titolo
describe('Title testing', () => {
  // ora creo i singoli test
  // testo che il titolo si monti correttamente nel DOM
  it('mounts correctly the title', () => {
    // dopo aver scritto il titolo, ora descrivo il test
    // per ogni test ci sono 4 steps:
    // 1) montaggio del componente nel virtual DOM
    render(<HiddenSection />)
    // 2) ricerca dell'elemento
    const title = screen.getByText(/componente card/i) // così cerco un bottone nella pagina
    // screen rappresenta il VIRTUAL DOM; su di esso cercheremo gli elementi
    // montati con il metodo "render"
    // 3) interazione con l'elemento (se necessaria)
    // nel nostro caso non dobbiamo farci niente con questo bottone
    // 4) verifica delle aspettative
    expect(title).toBeInTheDocument()
  })
})
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

  // facciamo ora un altro test per verificare non solo che ci sia un bottone,
  // ma che la sua etichetta sia proprio "MOSTRA ORFISSO"
  it('mount correctly the orfisso button', () => {
    // 1) montaggio del componente nel virtual DOM
    render(<HiddenSection />)
    // 2) ricerca dell'elemento
    const orfissoButton = screen.getByText(/mostra orfisso/i)
    const notExisting = screen.queryByText(/nascondi orfisso/i)
    // 3) interazione con l'elemento (se necessaria)
    // nel nostro caso non dobbiamo farci niente con questo bottone
    // 4) verifica delle aspettative
    expect(orfissoButton).toBeInTheDocument()
    expect(notExisting).not.toBeInTheDocument()
  })
})

describe('testing button and card', () => {
  it('changes button label and orfisso appears when clicked', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const orfissoButton = screen.getByText(/mostra orfisso/i)
    // 3) CLICK SUL BOTTONE
    fireEvent.click(orfissoButton) // cliccato una volta il bottone
    const newButton = screen.getByText(/nascondi orfisso/i)
    // cerchiamo anche orfisso!
    const orfissoImage = screen.getByAltText('orfisso')
    // 4)
    expect(newButton).toBeInTheDocument()
    expect(orfissoImage).toBeInTheDocument()
  })

  it('changes button label and orfisso disappears when double clicked', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const orfissoButton = screen.getByText(/mostra orfisso/i)
    // 3) CLICK SUL BOTTONE
    fireEvent.click(orfissoButton) // cliccato una volta il bottone
    fireEvent.click(orfissoButton) // cliccato una volta il bottone
    const orfissoButton2 = screen.getByText(/mostra orfisso/i)
    // cerchiamo anche orfisso!
    const orfissoImage = screen.queryByAltText('orfisso')
    // 4)
    expect(orfissoButton2).toBeInTheDocument()
    expect(orfissoImage).not.toBeInTheDocument()
  })
})
