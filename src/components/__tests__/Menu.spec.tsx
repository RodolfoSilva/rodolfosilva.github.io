import { fireEvent, render, screen } from '@testing-library/react';
import matchMediaPolyfill from 'mq-polyfill';
import Menu from '../Menu';

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };
});

beforeEach(() => {
  window.resizeTo(991, 991);
})

test('should render the menu', () => {
  render(<Menu />);
  const openMenuButton = screen.getByLabelText(/Abrir o menu/i);
  expect(openMenuButton).toBeInTheDocument();
});

test('should display open menu button only in devices less than 992px and hide menu', () => {
  render(<Menu />);

  const openMenuButton = screen.getByLabelText(/Abrir o menu/i);
  expect(openMenuButton).toHaveAttribute('aria-hidden', 'false');
  expect(openMenuButton).toHaveStyleRule('display', 'block');

  const menuElement = screen.getByRole('navigation', { hidden: true });
  expect(menuElement).toHaveAttribute('aria-hidden', 'true');
  expect(menuElement).toHaveStyleRule('opacity', '0');

  const closeMenuButton = screen.getByLabelText(/Fechar o menu/i);
  expect(closeMenuButton).toHaveAttribute('aria-hidden', 'false');
  expect(closeMenuButton).toHaveStyleRule('display', 'block');

});

test('should not hide the navigation when the devices greather or equal to 992px', () => {
  window.resizeTo(992, 992);

  render(<Menu />);

  const openMenuButton = screen.getByLabelText(/Abrir o menu/i);
  expect(openMenuButton).toHaveAttribute('aria-hidden', 'true');
  expect(openMenuButton).toHaveStyleRule('display', 'none', {
    media: `(min-width: 992px)`,
  });

  const menuElement = screen.getByRole('navigation', { hidden: false });
  expect(menuElement).toHaveAttribute('aria-hidden', 'false');
  expect(menuElement).toHaveStyleRule('opacity', '1');

  const closeMenuButton = screen.getByLabelText(/Fechar o menu/i);
  expect(closeMenuButton).toHaveAttribute('aria-hidden', 'true');
  expect(closeMenuButton).toHaveStyleRule('display', 'none', {
    media: `(min-width: 992px)`,
  });
});

test('should handle the open/close menu when are in mobile', () => {
  render(<Menu />);

  const menuElement = screen.getByRole('navigation', { hidden: true });

  expect(menuElement).toHaveAttribute('aria-hidden', 'true');
  expect(menuElement).toHaveStyleRule('opacity', '0');

  fireEvent.click(screen.getByLabelText(/Abrir o menu/i));
  expect(menuElement).toHaveAttribute('aria-hidden', 'false');
  expect(menuElement).toHaveStyleRule('opacity', '1');

  expect(screen.getByLabelText(/Fechar o menu/i)).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText(/Fechar o menu/i));
  expect(menuElement).toHaveAttribute('aria-hidden', 'true');
  expect(menuElement).toHaveStyleRule('opacity', '0');
});
