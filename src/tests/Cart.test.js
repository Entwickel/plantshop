// Cart.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../components/Cart';
import '@testing-library/jest-dom';

describe('Composant Cart', () => {
  const mockUpdateCart = jest.fn();
  const mockUpdateTotal = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setupComponent = () => {
    render(
      <Cart 
        cart={[]} 
        updateCart={mockUpdateCart}
        total={0}
        updateTotal={mockUpdateTotal}
      />
    );
  };

  test('affiche le bouton "Ouvrir le Panier" initialement', () => {
    setupComponent();
    expect(screen.getByText('Ouvrir le Panier')).toBeInTheDocument();
  });

  test('ouvre le panier lors du clic sur le bouton', () => {
    setupComponent();
    fireEvent.click(screen.getByText('Ouvrir le Panier'));
    expect(screen.getByText('Fermer')).toBeInTheDocument();
  });

  test('ferme le panier lors du clic sur le bouton Fermer', () => {
    setupComponent();
    fireEvent.click(screen.getByText('Ouvrir le Panier'));
    fireEvent.click(screen.getByText('Fermer'));
    expect(screen.getByText('Ouvrir le Panier')).toBeInTheDocument();
  });

  test('affiche le total correctement', () => {
    setupComponent();
    fireEvent.click(screen.getByText('Ouvrir le Panier'));
    expect(screen.getByText('Total : 0€')).toBeInTheDocument();
  });

  test('appelle updateCart lors du clic sur "Vider le panier"', () => {
    setupComponent();
    fireEvent.click(screen.getByText('Ouvrir le Panier'));
    fireEvent.click(screen.getByText('Vider le panier'));
    expect(mockUpdateCart).toHaveBeenCalledWith(0);
  });
});