beforeEach(() => {
  document.querySelector('#target').innerHTML = '';
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers' },
        { Title: 'Not Avengers' },
        { Title: 'Some other movie' },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it('dropdown starts closed', () => {
  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).not.to.include('is-active');
});

it('after searching dropdown opens', () => {
  const input = document.querySelector('input');
  InputDeviceInfo.value = 'avengers';
  input.dispatchEvent(new Event('input'));

  expect(dropdown.className).to.include('is-active');
});
