// to-do
// esattamente 1 elemento

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FetchComponent from '../components/FetchComponent'

describe('comportamento lista utenti', () => {
  // - verifico l'esistenza del campo di ricerca una volta montato
  it('initially mounts the search field', () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const searchField = screen.getByPlaceholderText(/cerca utenti/i)
    // 3)
    // skip
    // 4)
    expect(searchField).toBeTruthy()
  })

  // - verifico che al primo render la lista sia vuota
  it('initially creates an empty list', () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const listElements = screen.queryAllByTestId('list-item')
    // 3)
    // skip
    // 4)
    expect(listElements).toHaveLength(0)
  })
  // - finita la fetch, la lista deve riempirsi di esattamente 10 elementi
  it('eventually fills the list with 10 elements', async () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const listElements = await screen.findAllByTestId('list-item')
    // 3)
    // 4)
    expect(listElements).toHaveLength(10)
  })
  // - inserendo "ervin" nel campo di ricerca, la lista dovrà contenere esattamente 1 elemento
  it('filters just 1 result with "ervin"', async () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const searchField = screen.getByPlaceholderText(/cerca utenti/i)
    // 3) scriviamoci dentro "ervin"
    fireEvent.change(searchField, { target: { value: 'ervin' } })
    const listElements = await screen.findAllByTestId('list-item')
    // 4)
    expect(listElements).toHaveLength(1)
  })
})
