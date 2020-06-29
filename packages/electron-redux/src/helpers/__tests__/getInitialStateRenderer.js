import { ipcRenderer } from 'electron';
import getInitialStateRenderer from '../getInitialStateRenderer';

jest.unmock('../getInitialStateRenderer');

describe('getInitialStateRenderer', () => {
  it('should return the initial state', () => {
    const state = { foo: 456 };
    ipcRenderer.invoke.mockImplementation(() => Promise.resolve(JSON.stringify(state)));
    return getInitialStateRenderer(ipcRenderer).then(initialState =>
      expect(initialState).toEqual(state),
    );
  });
});
